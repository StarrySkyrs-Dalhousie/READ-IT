
verifyToken = (req, res, next) => {
    let app_id = req.headers['APP_ID'];

    if(!app_id) {
        return res.status(403).send({message: 'No APP ID prodived'});
    }
}
const auth = { verifyToken };
module.exports = auth;