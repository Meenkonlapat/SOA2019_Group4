const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Bill = mongoose.model("Bill",new mongoose.Schema({
    billId: String,
    requestId: String,
    customerId: String,
    companyId: String,
    billDetail: String,
    price: Number,
    date: Date
}))

router.get("/", async(req,res)=> {
    const bill = await Bill.find().sort("billId");
    res.send(bill);
});

router.post("/", async (req, res) => {
    const {error} = validateBill(req.body);
    if (error) return res.status(400).send(error);

    let bill = new Bill({
        billId: req.body.billId,
        requestId: req.body.requestId,
        customerId: req.body.customerId,
        companyId: req.body.companyId,
        billDetail: req.body.billDetail,
        price: req.body.price,
        date: req.body.date
    })
    bill = await bill.save();

    res.send(bill);
})

router.put("/:id",async(req,res)=>{
    const result = await  Bill.findOneAndUpdate(
    {
        _id: req.params.id
    },
    {
        $set:
        {
            billId: req.body.billId,
            requestId: req.body.requestId,
            customerId: req.body.customerId,
            companyId: req.body.companyId,
            billDetail: req.body.billDetail,
            price: req.body.price,
            date: req.body.date
        }
    },
    {new : true})
    res.send(result)
})

router.delete("/:id", async (req, res) => {
    const result = await Bill.findOneAndDelete({_id: req.params.id});
    if(!result) return res.status(404).send("bill not found")
        res.send(result);
})

router.get("/:id", async (req, res) => {
    const request = await Bill.findOne({_id: req.params.id});
    if(!request) return res.status(404).send("bill not found")
        res.send(request);
})

function validateBill(bill)
{
    const schema = {
        billId: Joi.string(),
        requestId: Joi.string(),
        customerId: Joi.string(),
        companyId: Joi.string(),
        date: Joi.date(),
        price: Joi.number(),
        billDetail: Joi.string()
    }

    return Joi.validate(bill, schema);
}

module.exports = {router, validateBill};