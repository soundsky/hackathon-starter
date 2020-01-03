const Track = require('../models/Track')

exports.getTracks = async (req, res, next) => {
    // let tracks;
    const tracks = await Track.find({}).limit(100)
        // console.log('lll', l)
        // tracks = l
    
    console.log(tracks)
    return res.json({tracks, authorized: true})
}