const Track = require('../models/Track')
const User = require('../models/User')

exports.getTracks = async (req, res, next) => {
    const tracks = await Track.find({}).limit(100)
    console.log('getTracksUzer', req.userID)
    // console.log(tracks)
    return res.json({ tracks, authorized: true })
}

exports.postSong = async (req, res, next) => {
    // console.log('postSongInvoked')
    console.log('postSong', req.body)
    // console.log('postSong userID', req)
    

        const trackToAdd = await Track.findOne({ _id: req.body.id })

        const user = await User.findOne({ _id: req.userID })

        user.tracks.push(trackToAdd)

        await user.save()
        console.log('userTracks', user.tracks)

        return res.json(user.tracks)
    
}