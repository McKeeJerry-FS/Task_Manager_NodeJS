// custom error handling for routes that do not exist

const notFound = (req, res, next) => {
    res.status(404).send('Route does not exist');
};

module.exports = notFound;