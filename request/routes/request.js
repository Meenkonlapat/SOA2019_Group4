
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const validateObjectId = require("../middleware/validateObjectId")

const Request = mongoose.model("Request", new mongoose.Schema({
    requestId: String,
    customer: {
        id : String,
        name : String,
        address : String
    },
    company:
    {
        id: String,
        name: String,
        address: String
    },
    status: String,
    title: String,
    description: String,
    bill: [{
        detail: String,
        price: Number
    }]
}))

router.get("/", async (req, res) => {
    const requests = await Request.find().sort("requestId");
    res.send(requests);
    // use this for pagination if needed
    // get pageNumber and pageSize from param
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
});

router.get("/count", async (req, res) => {
    const request = await Request.countDocuments();
    const result = {
        count: request
    }
    res.send(result);
})

router.post("/", async (req, res) => {
    const {error} = validateRequest(req.body);
    if (error) return res.status(400).send(error);

    let request = new Request({
        requestId: req.body.requestId,
        customer: req.body.customer,
        company: req.body.company,
        category: req.body.category,
        status: req.body.status,
        description: req.body.description,
        bill: req.body.bill
    })
    request = await request.save();

    res.send(request);
})

router.put("/:id/status", validateObjectId, async (req, res) => {
    const result = await Request.findOneAndUpdate(
    {
        _id: req.params.id
    }, 
    {
        $set:
        {
            status: req.body.status
        }
    },
    {new : true});
    if(!result) return res.status(404).send("request not found");
    res.send(result);
})

router.put("/:id/bill", validateObjectId, async (req, res) => {
    const result = await Request.findOneAndUpdate(
    {
        _id: req.params.id
    }, 
    {
        $set:
        {
            bill: req.body.bill
        }
    },
    {new : true});
    if(!result) return res.status(404).send("request not found");
    res.send(result);
})

router.put("/:id", validateObjectId, async (req, res) => {
    const result = await Request.findOneAndUpdate(
    {
        _id: req.params.id
    }, 
    {
        $set:
        {
            customer: req.body.customer
        }
    },
    {new : true});
    if(!result) return res.status(404).send("request not found");
    res.send(result);
})

router.delete("/:id", validateObjectId, async (req, res) => {
    const result = await Request.findOneAndDelete({_id: req.params.id});
    if(!result) return res.status(404).send("request not found")
    res.send(result);
})

router.get("/:id", validateObjectId, async (req, res) => {
    const request = await Request.findOne({_id: req.params.id});
    if(!request) return res.status(404).send("request not found")
    res.send(request);
})

function validateRequest(request)
{
    const schema = {
        requestId: Joi.string(),
        customer: Joi.object({
            id: Joi.string(),
            name: Joi.string(),
            address: Joi.string()
        }),
        company: Joi.object({
            id: Joi.string(),
            name: Joi.string(),
            address: Joi.string()
        }),
        status: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
        bill: Joi.array().items(Joi.object({
            detail: Joi.string(),
            price: Joi.number()
        }))
    }

    return Joi.validate(request, schema);
}

module.exports = {router, validateRequest, Request};