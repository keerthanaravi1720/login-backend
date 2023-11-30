

// const express = require('express');
// const userController = require('../controller/userController');
// const loginController = require('../controller/loginController');
// const crudController = require('../controller/crudController');


// const router = express.Router();


// // router.put('/update/:id', authenticateToken, crudController.updateUser);
// // router.delete('/delete/:id', authenticateToken, crudController.deleteUser);


// router.post('/users', userController.createUser);
// router.post('/login', loginController.login);
// router.put('/update/:id', crudController.updateUser);
// // router.delete('/delete/:id', crudController.deleteUser);

// // Add more user-related routes if needed

// module.exports = router;





const express = require('express');
const userController = require('../controller/userController');
const loginController = require('../controller/loginController');
const crudController = require('../controller/crudController');

const router = express.Router();


router.post('/users', userController.createUser);
router.post('/login', loginController.login);


router.put('/update/:id',crudController.updateUser);

router.delete('/delete/:id',crudController.deleteUser);



module.exports = router;
