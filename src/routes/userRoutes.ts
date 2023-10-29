import { Router } from 'express';

import { createUser, getAllUsers ,delteUser,getUser,updateUser} from '../controllers/userController';

const router = Router();
const URL_API = '/api/v1'

router.get(`${URL_API}/user`,getAllUsers)
router.get(`${URL_API}/user/:id`, getUser);
router.post(`${URL_API}/user`, createUser);
router.put(`${URL_API}/user`, updateUser);
router.delete(`${URL_API}/user`, delteUser);

export default router;
