
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const validateObjectId = require("../middleware/validateObjectId")

const Request = mongoose.model("Request", new mongoose.Schema({
    requestId: String,
    customerId: String,
    companyId: String,
    category: String,
    status: String,
    description: String
}))

router.get("/", async (req, res) => {
    const requests = await Request.find().sort("requestId");
    res.send(requests);
});

router.post("/", async (req, res) => {
    const {error} = validateRequest(req.body);
    if (error) return res.status(400).send(error);

    let request = new Request({
        requestId: req.body.requestId,
        customerId: req.body.customerId,
        companyId: req.body.companyId,
        category: req.body.category,
        status: req.body.status,
        description: req.body.description
    })
    request = await request.save();

    res.send(request);
})

router.put("/:id", validateObjectId, async (req, res) => {
    const result = await Request.findOneAndUpdate(
    {
        _id: req.params.id
    }, 
    {
        $set:
        {
            companyId: req.body.companyId,
            status: req.body.status,
            description: req.body.description
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
        customerId: Joi.string(),
        companyId: Joi.string(),
        category: Joi.string(),
        status: Joi.string(),
        description: Joi.string()
    }

    return Joi.validate(request, schema);
}

module.exports = {router, validateRequest, Request};