const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    title: {
        type: String
    }, 
    description:{
        type: String
    },
    datastart:{
        type: String
    },
    dataend:{
        type: String
    },
    color: {
        type: String
    },
   
    url: {
        type: String
    },
    etat: {
         type: Boolean
    },
    idUser: {
        type: String

    }
}, {
        collection: 'events'
    }, {
        timestamps: true,
    })
module.exports = mongoose.model('Event', eventSchema)