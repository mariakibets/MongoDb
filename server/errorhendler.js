const { Error: {ValidatorError}} = require("mongoose");


module.exports.errorHandler = async (err, req, res, next) => {
    if(err instanceof ValidatorError) {
        return res.status(400).send(err.massage);
    }

    if(err instanceof CastEr)

    return res.status(500).send('Unknown error')
}