
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Company = mongoose.model("Company", new mongoose.Schema({
    companyId : String,
    companyName : String,
    companyDescription : String,
    companyCategory : String,
}))

router.get("/", async(req, res) => {
    const companys = await Company.find().sort("CompanyId");
    res.send(companys);
})


router.post("/", async (req, res) => {
    const {error} = validateCompany(req.body);
    if (error) return res.status(400).send(error);

    let company = new Company({
        companyId: req.body.companyId,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        companyCategory: req.body.companyCategory,
    })
    company = await company.save();

    res.send(company);
})

router.put("/:id", async(req, res) => {
    const result = await Company.findOneAndUpdate({
        _id: req.params.id
    },
    {
        $set:
        {
            companyName: req.body.companyName,
            companyDescription: req.body.companyDescription,
            companyCategory: req.body.companyCategory,
        }
    },
    {new : true});
    if (!result) return res.status(404).send("company not found")
    res.send(result);
})

router.delete("/:id", async (req, res) => {
    const result = await Company.findOneAndDelete({_id: req.params.id});
    if(!result) return res.status(404).send("company not found")
    res.send(result);
})

router.get("/:id", async (req, res) => {
    const company = await Company.findOne({_id: req.params.id});
    if(!request) return res.status(404).send("company not found")
    res.send(company);
})

function validateCompany(company)
{
    const schema = {
        companyId: Joi.string(),
        companyName: Joi.string(),
        companyDescription: Joi.string(),
        companyCategory: Joi.string()
    }

    return Joi.validate(company, schema);
}

module.exports = {router, validateCompany, Company};
