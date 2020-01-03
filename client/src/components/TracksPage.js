import React, { useState, useEffect } from 'react';
import { Table, CardDeck, Card, Button } from 'react-bootstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const TracksView = (props) => {
    const [tracks, setTracks] = useState([]);
    const [list, setList] = useState({ playlist: "" });

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

    const handleChanges = e => {
        setList({ ...list, [e.target.name]: e.target.value });
        console.log('list', list);
    }

    const postSong = id => {
        // e.preventDefault();
        axiosWithAuth()
            .post('/postSong', {id})
            .then(res => {
                setList({ playlist: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="playlist-cont">
            {list.map((l) =>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Track</th>
                            <th>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>1</td> */}
                            <td>{l.track}</td>
                            <td>{l.artist}</td>
                        </tr>
                    </tbody>
                </Table>
            )}
            {tracks.map((t) =>
                <CardDeck>
                    <Card key={t._id} inline style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card.Body>
                            <Card.Title>Track: {t.track}</Card.Title>
                            <Card.Text>Artist: {t.artist}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => { postSong(t._id) }}>Add to playlist</Button>
                    </Card>
                </CardDeck>
            )}
        </div>
    )
}

export default TracksView