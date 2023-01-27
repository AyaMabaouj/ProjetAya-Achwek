const asyncHandler = require('express-async-handler')
const { isObjectIdOrHexString } = require('mongoose')

const Event = require('../models/schemaEvent')
const getEvent = asyncHandler(async(req, res) => {
  const iduser = req.params.id;
  console.log(iduser)

// Check for user email
const events = await Event.find({idUser: iduser})
  res.status(200).json(events)
})

const getEvents = asyncHandler(async(req, res) => {
  
if(!ObjectID.isValid(req.params.idUser)){
  return res.status(400).send('ID User: '+ req.params.idUser)
}
// Check for user email
const events = await Event.find()
  res.status(200).json(events)
})


module.exports = {
    getEvent,
}