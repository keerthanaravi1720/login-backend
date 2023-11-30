
  
//  const { PrismaClient } = require('@prisma/client');
//  const jwt = require('jsonwebtoken');
//  const prisma = new PrismaClient();

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     // Generate and send access token
//     const accessToken = generateAccessToken({ email: user.email });
//     res.json({ message: 'Login successful', accessToken });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to perform login' });
//   }
// };

// const generateAccessToken = (payload) => {
//   // Generate JWT access token
//   return jwt.sign(payload, 'your_secret_key', { expiresIn: '8h' });
// };




// const { PrismaClient } = require('@prisma/client');
// const jwt = require('jsonwebtoken');
// const prisma = new PrismaClient();

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });
//     // const user = await prisma.user.findUnique({
//     //   where: {
//     //     email: email,
//     //   },
//     // });
   
    

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     // Generate and send access token
//     const accessToken = generateAccessToken({ email: user.email });

//     // Retrieve user details from the database
//     const userDetails = await prisma.user.findUnique({
//       where: { email },
//       select: { email: true, name: true },
//     });

//     res.json({ message: 'Login successful', accessToken, userDetails });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to perform login' });
//   }
// };

// const generateAccessToken = (payload) => {
//   // Generate JWT access token
//   return jwt.sign(payload, 'your_secret_key', { expiresIn: '8h' });
// };


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate and send access token
    const accessToken = generateAccessToken({ email: user.email });

    // Retrieve user details from the database
    const userDetails = {
      email: user.email,
      name: user.name,
    };

    res.json({ message: 'Login successful', accessToken, userDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to perform login' });
  }
};

const generateAccessToken = (payload) => {
  // Generate JWT access token
  return jwt.sign(payload, 'your_secret_key', { expiresIn: '8h' });
};
