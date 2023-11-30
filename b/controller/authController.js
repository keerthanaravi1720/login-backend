const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

// exports.getUserData = async (req, res) => {
//   const { token } = req.body;

//   try {
//     // Verify and decode the token
//     const decoded = jwt.verify(token, 'your_secret_key');

//     // Fetch user data based on the decoded token
//     const user = await prisma.user.findUnique({
//       where: { email: decoded.email },
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Return the user data
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch user data' });
//   }
// };



