/*
    Task routes / Task
    host + /api/task
*/

const {Router}                 = require('express');
const {check}                  = require('express-validator');
const {validateFields}         = require('../middlewares/validateFields');
const router                   = Router();
const { addTask, updateTask, deleteTask, tasksList } = require('../controllers/taskController');



router.post(
    '/',
    [
        check('title','title is required'),
        check('description','description is required'),
        check('etiquetas','etiquetas is required'),
        check('color','color is required'),
        check('date','date is required'),
        check('completed','completed is required'),
        check('time','time is required'),
        check('user','user is required'),
        validateFields
    ], 
    addTask);

router.put(
    '/:id',
    [
        check('title','title is required'),
        check('description','description is required'),
        check('etiquetas','etiquetas is required'),
        check('color','color is required'),
        check('date','date is required'),
        check('completed','completed is required'),
        check('time','time is required'),
        check('user','user is required'),
        validateFields
    ], 
    updateTask);

router.delete('/:id', deleteTask);

router.get('/', tasksList);




module.exports = router;