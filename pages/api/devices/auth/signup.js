import User from '../../../../models/User'
import dbConnect from '../../../../utils/dbConnect.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dbConnect();

export default async function handler(req, res) {
    const { email, password}= (req.body)

    // Validation
if( !email || !password) {

    res.status(400)
    throw new Error('Please include all fildes')
  }
  // Find if user already exists:
  const userExists = await User.findOne({email})
  if(userExists) {
      res.status(400)
      throw new Error('User already exist')
  
  }
  // Hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

// Create user
const user = await User.create({
  
    email,
    password: hashedPassword
})
if(user) {
    res.status(201).json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id)
    })
} else {
    res.status(400)
    throw new error('Invali user data')
}
  
  }
  // Generate Token 
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    } )
}