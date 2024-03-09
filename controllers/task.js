

const Task  = require("../models/task")

/**
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */

const getTasks = async(req,res) => {
    try {
        const getAllTask = await Task.find()
        return res.status(200).json({message:"task create successfully",getAllTask})
    } catch (error) {
        let statusCode = 500; // Default status code for other errors

        if (error.name === 'ValidationError') {
            // Mongoose validation error
            statusCode = 400; // Bad Request
        } else if (error.name === 'CastError' && error.kind === 'ObjectId') {
            // Mongoose CastError for invalid ObjectId
            statusCode = 404; // Not Found
        }

        return res.status(statusCode).json({ error: error.message });
    }
    }
    
const createTask = async(req,res) => {
    try {
        const data  =  req.body
        const createdUser = await Task.create(data)
        return res.status(200).json({message:"task create successfully",createdUser})
    } catch (error) {
        let statusCode = 500; // Default status code for other errors

        if (error.name === 'ValidationError') {
            // Mongoose validation error
            statusCode = 400; // Bad Request
        } else if (error.name === 'CastError' && error.kind === 'ObjectId') {
            // Mongoose CastError for invalid ObjectId
            statusCode = 404; // Not Found
        }

        return res.status(statusCode).json({ error: error.message });
    }
    
}

const updateTask = async(req,res) => {
    try {
            const taskId = req.params.taskId;
            const updateFields = req.body;
            // Use updateOne to find and update the task by ID
            const updateUser = await Task.updateOne(
                { _id: taskId },
                { $set: updateFields }
            );
        return res.status(200).json({message:"task update successfully",updateUser})
    } catch (error) {
        let statusCode = 500; // Default status code for other errors

        if (error.name === 'ValidationError') {
            // Mongoose validation error
            statusCode = 400; // Bad Request
        } else if (error.name === 'CastError' && error.kind === 'ObjectId') {
            // Mongoose CastError for invalid ObjectId
            statusCode = 404; // Not Found
        }

        return res.status(statusCode).json({ error: error.message });
    }
    
}
const deleteTask = async(req,res) => {
    try {
            const taskId = req.params.taskId;
            // Use updateOne to find and update the task by ID
            const deleteTask = await Task.deleteOne(
                { _id: taskId },
            );
        return res.status(200).json({message:"task delete successfully",deleteTask})
    } catch (error) {
        let statusCode = 500; // Default status code for other errors

        if (error.name === 'ValidationError') {
            // Mongoose validation error
            statusCode = 400; // Bad Request
        } else if (error.name === 'CastError' && error.kind === 'ObjectId') {
            // Mongoose CastError for invalid ObjectId
            statusCode = 404; // Not Found
        }

        return res.status(statusCode).json({ error: error.message });
    }
    
}
module.exports = {createTask,updateTask,getTasks,deleteTask};