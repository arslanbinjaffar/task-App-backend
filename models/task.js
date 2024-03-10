
const mongoose = require("mongoose")

/**
 * @typedef {Object} Task
 * @property {string} title - The title of the task.
 * @property {string} description - The description of the task.
 * @property {boolean} completed - Indicates whether the task is completed or not.
 */

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    Description: {
        type: String,
        required: true 
      
    },
    isCompleted: {
        type: Boolean,
    }

    
},{ timestamps: true })


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;