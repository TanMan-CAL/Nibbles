import express from 'express';
import { fetchGrid, createGrid, updateGrid } from './controllers.js'; 

const router = express.Router();

router.get('/', fetchGrid);
router.post('/', createGrid);
router.patch('/:id', updateGrid);
// dynamic (:) need id to update

export default router;