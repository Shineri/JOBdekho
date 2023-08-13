import express from 'express';
const router = express.Router();
import { allUsers, singleUser, editUser, deleteUser } from '../controllers/userController.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';


//user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser);
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser);
// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);




export default router;