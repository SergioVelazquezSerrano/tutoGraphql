const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido: String,
    edad: Number
});


export default model('User', userSchema);