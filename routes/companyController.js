const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;
/* Index Route */
router.get('/', (req, res) => {
    CompanyModel.find({})
    .then((companies) => {
        res.render('companies/index', {
            companies: companies
        })
    })
})

module.exports = router