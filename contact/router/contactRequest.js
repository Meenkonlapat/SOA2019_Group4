const joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router

const Contact = mongoose.model("Contact", new mongoose.Schema({
    companyId: String,
    cutomerId: String,
    messager: String,
    date: Date
}))

router.get('/', async(req, res) =>{
    res.send(await Contact.find())
})

router.post('/', async(req, res) =>{
    const { error } = validateContact(req.body) // it's mean result.error
    if(error) return res.status(400).send(error.details[0].message)

    let contact = new Contact({
        companyId: req.body.companyId,
        cutomerId: req.body.cutomerId,
        messager: req.body.messager,
        date: req.body.date
    })
    contact = await contact.save()

    res.send(contact)
})

function validateContact(contact){
    const schema = {
        companyId: joi.String(),
        cutomerId: joi.String(),
        messager: joi.String(),
        date: joi.Date()
    }
    return joi.validate(contact, schema)
}

module.exports = {router}