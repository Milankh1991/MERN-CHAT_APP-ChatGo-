import jwt  from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) =>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:'15d'
  });
  res.cookie("jwt", token, {
    // enhance security
    maxAge: 15 * 24 * 60 * 60 * 1000, // millisecond
    httpOnly: true, // preventing XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF(cross-site forgery) attacks
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndSetCookie;