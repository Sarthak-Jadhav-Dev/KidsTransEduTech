const express = require("express")
const router = express.Router()
const aiReply = require("../Services/bot.services")

router.post("/chatbot",async(req,res)=>{
    try {
        const messege = req.body.messege;
        if(!messege){
            return res.status(400).send("Sorry Bot Couldnt Catch you Please try Again!")
        }
        const response = await aiReply(messege)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
module.exports = router;
