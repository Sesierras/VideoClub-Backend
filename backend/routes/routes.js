const router = require('express').Router();
const model = require('../model/model');

router.get("/", (req, res) => {
    toDo.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    toDo.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.delete("/:id", (req,res) => {
    toDo.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    })
})

module.exports = router;