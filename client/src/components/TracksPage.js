import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const TracksView = (props) => {
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get('/tracks')
            .then(response => {
                console.log(response);
                if (response.data.authorized) {
                    setTracks(response.data.tracks)
                }
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <ul>
                {tracks.map((t) => <li>{t.track}</li>)}
            </ul>
        </div>
    )
}

export default TracksView