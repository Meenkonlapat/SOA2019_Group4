const joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Contact = mongoose.model("Contact", new mongoose.Schema({
    companyId: String,
    companyName: String,
    customerId: String,
    customerName: String,
    chat: [{
        sender: String,
        message: String,
        date : {type: Date, default: Date.now}
    }]
}))

router.get('/', async(req, res) =>{
    const company = req.query.companyId;
    const customer = req.query.customerId;
    let data;
    if (company && customer)
    {
        data = await Contact.findOne({companyId: company, customer: customer});
    }
    else
    {
        data = await Contact.find();
    }
    res.send(data)
})

router.post('/', async(req, res) =>{
    const { error } = validateContact(req.body) // it's mean result.error
    if(error) return res.status(400).send(error.details[0].message)

        let contact = new Contact({
            companyId: req.body.companyId,
            companyName: req.body.companyName,
            customerId: req.body.customerId,
            customerName: req.body.customerName,
            chat: req.body.chat
        })
    contact = await contact.save()

    res.send(contact)
})

router.put('/', async(req, res) => {
    // const { error } = validateContact(req.body); // it's mean result.error
    //if(error) return res.status(400).send(error.details[0].message);

    const company = req.query.companyId;
    const customer = req.query.customerId;
    if (!company || !customer) return res.status(400).send("please add companyid and customerid to parameter");

    const result = await Contact.findOneAndUpdate(
    {
        companyId : company,
        customerId : customer
    },
    {
        $push:{
            chat: req.body
        }
    },
    {new : true});
    if (!result) return res.status(404).send("chat not found");
    res.send(result);
})

router.delete("/:id", async (req, res) => {
    const result = await Contact.findOneAndDelete({_id: req.params.id});
    if(!result) return res.status(404).send("contact not found")
    res.send(result);
})

function validateContact(contact){
    const schema = {
        companyId: joi.string(),
        companyName: joi.string(),
        customerId: joi.string(),
        customerName: joi.string(),
        chat : joi.array().items(joi.object({
            sender : joi.string(),
            message : joi.string(),
            date : joi.date()
        }))
    }
    return joi.validate(contact, schema)
}

module.exports = {router, Contact}