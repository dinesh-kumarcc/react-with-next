const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        //if require donot meet the requirement then message pass in array as second parameter
        required: [true,'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40,'Title cannot be more than 40 characters']
    },
    description:{
        type: String,
        required:true,
        maxlength: [200, 'Description cannot be more than 200 char']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note',NoteSchema);