import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
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
        <ListGroup>
            <ListGroup.Item>
                {tracks.map((t) => 
                    <ListGroup.Item>
                        Track: {t.track} | Artist: {t.artist}
                    </ListGroup.Item>)}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default TracksView