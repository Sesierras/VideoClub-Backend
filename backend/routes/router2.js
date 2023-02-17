const router = require("express").Router();
const movie = require("../model/movieModel");
const ranking = require("../model/rankingModel");


router.get("/movies", (req, res) => {
    movie.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});
router.get("/rating", (req, res) => {
    ranking.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});
/* router.get("/movSelectMovie/:title", (req, res) => {
    movie.find({ title: req.params.title }, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
}); */

/* router.get("/movIndex/:title", (req, res) => {
    const entry = req.params.title;
    const regex = new RegExp(`^ ${entry}`, 'i');
    movie.find(
        {
            title: {
                "$regex": regex
            }
        }, (err, result) => {
            if (err) throw new Error(err);
            res.json(result);
        });
}); */

/* router.get("/movContains/:title", (req, res) => {
    const entry = req.params.title;

    movie.find(
        {
            title: { $regex: entry, $options: 'i' }
        }, (err, result) => {
            if (err) throw new Error(err);
            res.json(result);
        });
}); */


/* router.get("/rankingContains/:title", (req, res) => {
    const entry = req.params.title;
    ranking.find(
        {
            title: { $regex: entry, $options: 'i' }
        }, (err, result) => {
            if (err) throw new Error(err);
            res.json(result);
        });
}); */


router.post("/newMovies", (req, res) => {
    movie.create(
        req.body, (err, result) => {
            if (err) throw new Error(err);
            res.json(result);
        });
});

router.post("/newRanking", (req, res) => {
    ranking.create(
        req.body, (err, result) => {
            if (err) throw new Error(err);
            res.json(result);
        });
});

router.delete("/removeMovies", (req, res) => {
    movie.findOneAndRemove({ _id: req.body.id }, (err, result) => {
        if (err) throw new Error(err);
        res.end(result);
    });
});

router.delete("/removeRanking", (req, res) => {
    ranking.findOneAndRemove({ _id: req.body.id }, (err, result) => {
        if (err) throw new Error(err);
        res.end(result);
    });
});

router.put("/movies/:id", (req, res) => {
    movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/ranking/:id", (req, res) => {
    ranking.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});


module.exports = router;