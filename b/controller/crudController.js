
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const authenticateToken = (req, res, next) => {
  const accessToken = req.headers['authorization'];

  if (!accessToken) {
    return res.status(401).json({ error: 'Access token is not provided' });
  }

  try {
    const decodedToken = jwt.verify(accessToken, 'your_secret_key');
    req.user = decodedToken.email;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid access token' });
  }
};

exports.updateUser = async (req, res) => {

const { id, name } = req.params;
const data = req.body;

try {
  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  res.json({ message: 'User updated successfully', user: updatedUser });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Failed to update user' });
}
}

exports.deleteUser = async (req, res) => {

    const { id } = req.params;
    
    try {
      // Delete the user
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });
    
      res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }    