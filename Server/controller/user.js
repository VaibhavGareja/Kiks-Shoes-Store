const { generateToken } = require("../helper/authHelper");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");


module.exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "fields are required" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user =await User.create({ firstName, lastName, email, password:hashPassword});
    console.log(user)
    res.status(200).json({ message: "Registration successful" });

  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};


module.exports.loginUser = async (req, res)=>{
  try {
    const{email, password} = req.body;
    if(!email || !password){
      return res.status(400).json({ error: "fields are required" });
    }
    const user = await User.findOne({email})
    console.log(user,"database user find")
    if (!user)
      return res
        .status(401)
        .json({ error: "Authentication failed  : User not found" });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed : Incorrect password" });
    }
    const token = generateToken({ userId: user._id, email: user.email });
    
    return res.status(200).json({ token, user , message: "login sucess"});
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}