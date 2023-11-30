// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });

//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// };


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
