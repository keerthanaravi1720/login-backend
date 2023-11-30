// const express=require('express');
// const app=express();
// // const indexRoute= require('./Routes');
// // const homeRoute=require('./Routes/home')
// app.get('/yoho' , (req, res) =>{
//     res.send("Bink's sake,");
// });


// // app.use(indexRoute);
// // app.use(homeRoute);
// // app.listen(3000);

// const port=3000;
// app.listen(port,()=>{
//     console.log("Server Connected");
// });



const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const cors = require('cors');
// const userController=require('./controller/userController')
// const loginController=require('./controller/loginController')


const userRoutes = require('./Routes/userRoute');

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// app.post('/users', userController.createUser);  
// app.post('/login', loginController.login);
app.use(userRoutes);
  

  const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


            























