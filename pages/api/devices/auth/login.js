import User from '../../../../models/User'
import dbConnect from '../../../../utils/dbConnect.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dbConnect();


export default async function handler(req, res) {
    const { email, password} = req.body
    const user = await User.findOne({ email })
// check if user and password match
if(user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
        _id: user._id,
        
        email: user.email,
        token: generateToken(user._id),
    }) 
} else {
    res.status(401)
    throw new Error('Invalid credentials')
}
    // res.send('Login Route')
  }

   // Generate Token 
   const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    } )
}