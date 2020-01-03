import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlaylistsView = props => {
    // Setting dummy data for song information
    const [songInfo, setSongInfo] = useState({
        title: "",
        artist: "",
        album: "",
        duration: "",
        genre: "",
        id: Date.now()
    });

    // GET song data
    const getData = () => {
        axiosWithAuth()
            .get('/playlist')
            .then(res => {
                console.log(res.data);
                setSongInfo({ songInfo: res.data })
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {songInfo.map(song => (
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