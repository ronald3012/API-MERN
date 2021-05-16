const {response}  = require('express');
const TaskModel   = require('../models/TaskModel');

const tasksList = async (req, res) =>{

    try {

        const tasksList = await TaskModel.find({user:req.uid})

        res.json({
            ok:true,
            tasksList
        });

    } catch (error) {

        console.log(error);
        return res.status(400).json({
            ok:false,
            msg:'Error'
        })
    }


}

const addTask = async (req, res = response ) =>{

    try {

        let task = new TaskModel( req.body );

        await task.save();

        res.status( 201 ).json({
            ok:true,
            task: task
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Please talk to the administrator'
        })
    }
}

const updateTask = async (req, res = response ) =>{

    const taskId = req.params.id;

    try {

        const task = await TaskModel.findById(taskId);

        if(!task){ return res.status(404).json({ok:false,msg:'Unknown id'}) }
        if (task.user.toString() !== req.uid) { return res.status(401).json({ok:false,msg:"You don't have permissions"}) }

        const taskNew = {
            ...req.body,
            user: req.uid
        }

        const taskUpdated = await TaskModel.findByIdAndUpdate( task.id,taskNew, {new:true});

        res.json( {ok:true,task:taskUpdated} );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Please talk to the administrator'
        })
    }
}

const deleteTask = async (req, res = response ) =>{

    const taskId = req.params.id;

    try {

        const task = await TaskModel.findById(taskId);

        if(!task){ return res.status(404).json({ok:false,msg:'Unknown id'}) }
        if (task.user.toString() !== req.uid) { return res.status(401).json({ok:false,msg:"You don't have permissions"}) }

        await TaskModel.findByIdAndDelete(task.id)

        res.json({ok:true});

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Please talk to the administrator'
        })
    }
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    tasksList
};

