const router =  require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description =  req.body.description;
    const writing =  req.body.writing;

    const newArticle = new Article({
        title,
        description,
        writing,
    });

    newArticle.save()
    .then(() => res.json('New Article Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('Article Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.description = req.body.description;
        article.writing = req.body.writing;

        article.save()
        .then(() => res.json('Article Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;