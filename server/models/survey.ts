import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

// DEFINE THE OBJECT SCHEMA
var surveySchema = new mongoose.Schema({
    surveyTitle: {
        type: String,
        default: '',
        trim: true,
        required: 'Survey Title is required'
    },
    surveyContent: {
        type: String,
        default: '',
        trim: true,
        required: 'Content is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
},
{ collection: 'surveyInfo' });

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var Survey = mongoose.model('Survey', surveySchema);