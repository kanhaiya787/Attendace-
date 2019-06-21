const express = require('express');
const router = express.Router();
var cors = require('cors');

//bring in the model
const User = require("../../models/Users");

// @route GET  api/users
// @desc       Retrieve Data
// @access     Public

router.get('/:id', cors(), async (req, res) => {
    
    var id = req.params.id;

    console.log(id);
    try {
        const x = await User.find({emp_ID:id});
        res.json(x);
    }
    catch (err)
    {
        res.json({message:err})
    }
});


router.get('/', async (req, res) => {

    try {
        const x = await User.find();
        res.json(x);
    }
    catch (err)
    {
        res.json({message:err})
    }
});


// @route POST  api/users
// @desc        Send data
// @access      Public

router.post('/', (req, res) => {

    // console.log(req.body);

    const { emp_ID, emp_Name, Ph_no } = req.body;

    try {
        
        // find if a emp exits
        //let user = User.findOne( {emp_ID });

        let user = new User({
            emp_ID,
            emp_Name,
            Ph_no
        });

        console.log(user);
        user.save();


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }



    res.send(req.body);
});


module.exports = router;