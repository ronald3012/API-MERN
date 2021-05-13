const {Schema,model} = require('mongoose');

const taskSchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    etiquetas:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


module.exports = model( 'Task', taskSchema );
