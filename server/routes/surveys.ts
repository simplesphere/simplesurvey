import express = require('express');
var router = express.Router();

// db references
import mongoose = require('mongoose');
import surveyModel = require('../models/survey');

import Survey = surveyModel.Survey;

// GET - show main aritcles page
router.get('/', (req: express.Request, res: express.Response, next: any) => {

    // use the Survey model to query the Surveys collection
    Survey.find(function(error, surveys) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            // no error, we found a list of surveys
            res.render('surveys/index', {
                title: 'Surveys',
                surveys: surveys
            });
        }
    });
});

// GET add page - show the blank form
router.get('/add', function(req: express.Request, res: express.Response, next: any) {
    res.render('surveys/add', {
        title: 'Add a New Survey'
    });
});

// POST add page - save the new survey
router.post('/add', function(req: express.Request, res: express.Response, next: any) {
    Survey.create({
        title: req.body.title,
        content: req.body.content
    }, function(error, Survey) {
        // did we get back an error or valid Survey object?
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/surveys');
        }
    })
});

// GET edit page - show the current survey in the form
router.get('/:id', (req: express.Request, res: express.Response, next: any) => {

    var id = req.params.id;

    Survey.findById(id, (error, Survey) => {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            //show the edit view
            res.render('surveys/edit', {
                title: 'Survey Details',
                survey: Survey
            });
        }
    });
});

// POST edit page - update the selected survey
router.post('/:id', (req: express.Request, res: express.Response, next: any) => {

    // grab the id from the url parameter
    var id = req.params.id;

    // create and populate an survey object
    var survey = new Survey({
        _id: id,
        title: req.body.title,
        content: req.body.content
    });

    // run the update using mongoose and our model
    Survey.update({ _id: id }, survey, (error) => {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/surveys');
        }
    });
});

// GET delete survey
router.get('/delete/:id', (req: express.Request, res: express.Response, next: any) => {

    // get the id from the url
    var id = req.params.id;

    // use the model and delete this record
    Survey.remove({ _id: id }, (error) => {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/surveys');
        }
    });
});

// make this public
module.exports = router;