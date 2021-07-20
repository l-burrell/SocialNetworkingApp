const db = require('../models/model');

exports.locateEvent = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        db.eventdb.findById(id)
        .then(event => {
            if(!event) { res.status(404).send("No event found with that id.") }
            else { res.send(event) }
        })
        .catch(error => {
            res.status(500).send({message: 'Could not locate this event' || error.message});
        })
    } else {
        db.eventdb.find()
        .then(events => {
            res.send(events);
        })
        .catch(error => {
            res.status(500).send({message: 'Could not locate any events' || error.message});
        })
    }
}

exports.addEvent = (req, res) => {
    if(!req.body) {
        res.status(400).send('You must add the details of the event.')
        return;
    }
    const event = new eventdb({
        title: req.body.title,
        description: req.body.description,
        host: req.body.host,
        team_members: req.body.team_members,
        venue_type: req.body.venue_type,
        event_category: req.body.event_category,
        price: req.body.price,
        images: req.body.images,
        list_of_sponsors: req.body.list_of_sponsors,
        associated_account: req.body.associated_account,
        date: req.body.date,
    });

    event.save(event)
    .then(data => {
        res.redirect('/');
    })
    .catch(error => {
        res.status(500).send({message: 'Could not create this event' || error.message});
    });
}

exports.updateEvent = (req, res) => {
    res.send('hiu');
}

exports.deleteEvent = (req, res) => {
    db.eventdb.findByIdAndDelete(req.params.id)
    .then(data => {
        if(!data){
            res.status(500).send({message: 'Could not delete this event' || error.message});
        } else {
            res.redirect('/');
        }
    })
    .catch(error => {
        res.status(500).send({message: 'Could not delete this event' || error.message});
    });
}

exports.test = (req, res)=>{
    if(req.body){
        b = req.body
        // res.send('passed')
        res.send(`${b.length}`)
    } else {
        res.send('nothing was passed')
    }
}