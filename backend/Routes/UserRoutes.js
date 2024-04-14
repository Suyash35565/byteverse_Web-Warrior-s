const express = require('express')
const router = express.Router()
const User = require('../models/User')

//const { body, validationResult } = require('express-validator');

router.post("/creatuser", async (req, res) => {

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    // const existingUser = await User.findOne({ email: req.body.email });
    // if (existingUser) {
    //     return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    // }
    try {



        await User.create({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            password: req.body.password,
            email: req.body.email,
            roll: req.body.roll,
            mobile: req.body.mobile,
            linkedin: req.body.linkedin,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            namestartup: req.body.namestartup,
            regstartup: req.body.regstartup,
            websiteurl: req.body.websiteurl,
            sector_of_startup:req.body.websiteurl,
            stage_of_startup: req.body.stage_of_startup,
            incorporation: req.body.incorporation,
            company_type: req.body.company_type,
            city_of_operation: req.body.city_of_operation
            
        })

        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

router.post("/loginuser", async (req, res) => {
    let email = req.body.email
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            console.log("A");
            console.log(email);
            return res.status(400).json({ errors: "Username Not available" })
        }
        if (req.body.password !== userData.password) {
            console.log("B");
            return res.status(400).json({ errors: "Password do not match" })
        }
        return res.json({ success: true })

    } catch (error) {
        console.log(error)
        res.json({ success: false });
        console.log("C");
    }
})
router.post("/updateuser", async (req, res) => {
    const email = req.body.email;
    const newData = {
        
        $set: {
            namestartup: req.body.namestartup,
        regstartup: req.body.regstartup,
        websiteurl: req.body.websiteurl,
        sector_of_startup:req.body.sector_of_startup,
        stage_of_startup: req.body.stage_of_startup,
        incorporation: req.body.incorporation,
        company_type: req.body.company_type,
        city_of_operation: req.body.city_of_operation  
        }
    };

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            newData,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ errors: "User not found" });
        }

        return res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: "Server error" });
    }
});





module.exports = router;