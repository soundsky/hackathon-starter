import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlaylistsView = props => {
    // Setting state for song information and playlist
    const [playlist, setPlaylist] = useState([]);
    const [songInfo, setSongInfo] = useState({
        track: "",
        artist: "",
        duration: "",
        _id: ""
    });

    // GET song data
    useEffect(() => {
        axiosWithAuth()
            .get('/playlist')
            .then(res => {
                console.log(res.data);
                // setPlaylist(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    console.log(songInfo);

    return (
        <div>
            {playlist.map(song => (
                <p key={song.id}>
                Song Title: {song.title} | 
                Artist: {song.artist} | 
                Album: {song.album} | 
                Duration: {song.duration} | 
                Genre: {song.genre}
                </p>
            ))}
        </div>
    );
}

export default PlaylistsView;