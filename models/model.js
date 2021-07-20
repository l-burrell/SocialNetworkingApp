// connect to mongodb
const mongoose = require('mongoose')

// create schema for the models
const accountSchema = new mongoose.Schema({
    display_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDubs: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirm: {
        type: String,
        required: true,
    },
    location: String,
    created_events: Array,
    attending_events: Array,
    preferred_activities: Array,
    preferred_communities: Array,
    image: String,
});

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    team_members: Array,
    venue_type: String,
    event_category: Array,
    price: {
        type: Number,
        required: true,
    },
    images: Array,
    list_of_sponsors: Array,
    associated_account: mongoose.ObjectId,
    date: {
        type: Date,
        required: true,
    },
});

// models are used by the controller
const accountdb = mongoose.model('accountdb', accountSchema);
const eventdb = mongoose.model('eventdb', eventSchema);

module.exports = {accountdb, eventdb}
