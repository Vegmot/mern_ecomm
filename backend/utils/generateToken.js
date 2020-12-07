import jwt from 'jsonwebtoken';

const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 300000, // 5 minutes
  });
};

export default generateToken;
