const Track = require('../models/Track')
const User = require('../models/User')

exports.getTracks = async (req, res, next) => {
    const tracks = await Track.find({}).limit(100)
        
    console.log(tracks)
    return res.json({tracks, authorized: true})
}

exports.postSong = async (req, res, next) => {
    console.log('postSong',req.body)

    const trackToAdd = await Track.findOne({_id : req.body})
}