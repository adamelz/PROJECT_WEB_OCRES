const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();

// Create RAW data array
let drivers = [];

// On insère un film initial
const movie = "lewis";
const url = `https://api-formula-1.p.rapidapi.com/driverssearch=${movie}`;

// Make a request for a movie
axios.get(url)
    .then(function (response) {
        // handle success
        if (response.data) {
            const { id, Name, Search } = response.data;

            drivers.push({
                id: _.uniqueId(),
                name: Name,
                serach: Search
            });
        }
        console.log(drivers);
    });

// .../movies/
/* GET movies listing. */
router.get('/', (req, res) => {
    // Get List of movie and return JSON
    res.status(200).json({ drivers });
});

// .../movies/86
/* GET one movie. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find movie in DB
    const movie = _.find(drivers, ["id", id]);

    if (movie) {
        // Return movie
        res.status(200).json({
            message: 'movie found!',
            movie
        });
    } else {
        res.status(404).json({
            message: 'movie not found!'
        });
    }
});

// ..../movies/
/* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { movie } = req.body;

    const url = `https://api-formula-1.p.rapidapi.com/driverssearch=${movie}`;

    // Make a request for a movie
    axios.get(url)
        .then((data) => {
            // handle success
            if (data.data) {



                const { id, Name, Search } = data.data;
                const newMovie = {
                    id: _.uniqueId(),
                    name: Name,
                    serach: Search
                }

                drivers.push(newMovie);

                // Return validation message
                res.json({
                    message: `Just added ${Name}`,
                    movie: { newMovie },
                });
            } else {
                res.json({
                    message: `Movie not found`
                });
            }
        })
        .catch(function (error) {
            // handle error
            res.json({ error });
        });
});

/* DELETE movie. */
router.delete('/:id', (req, res) => {
    // Get the :id of the movie we want to delete from the params of the request
    const { id } = req.params;

    // Remove from "DB"
    _.remove(drivers, ["id", id]);

    // Return message
    res.json({
        message: `Just removed ${id}`
    });
});

/* UPDATE movie. */
router.post('/:id', (req, res) => {
    // Get the :id of the movie we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the movie we want to update from the body of the request
    const { movie } = req.body;
    // Find in DB
    const movieToUpdate = _.find(drivers, ["id", id]);
    // Update data with new data (js is by address)
    movieToUpdate.movie = movie;

    // Return message
    res.json({
        message: `Just updated ${id} with ${movie}`
    });
});

module.exports = router;