import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import axios from '../axios';

function EskapItem({eskap, reload}) {

    const {id, name, number, street, city, theme, difficulty, price, official} = eskap;
    const address = `${number} ${street} ${city}`;

    function removeEskap(id) {
        console.log("Remove eskap game ==> Id : "+id);
    }

    async function changeFavState(id) {
        const method = official ? "deleteofficial" : "addofficial"; 
        const response = await axios.put(`/eskaps/${method}/${id}`);
        if (response.status === 200) {
            // Method than call api again to get new list
            reload();
        }
    }

    return (
        <Card className="eskapItem m-1" style={{width: '24%'}}>
            <Card.Body>
                <Card.Title>{name} | id : {id} </Card.Title>
                <Card.Subtitle>{`Address : ${address}`}</Card.Subtitle>
                <ListGroup variant="list-group-flush m-2">
                    <ListGroup.Item>Theme : {theme}</ListGroup.Item>
                    <ListGroup.Item>Difficulty : {difficulty}</ListGroup.Item>
                    <ListGroup.Item>Price : {price}</ListGroup.Item>
                </ListGroup>
                <div className="eskapItem-buttons">
                    <Button className="w-50" onClick={() => changeFavState(id)}>
                        {!official ? "Add To Officials" : "Remove from Officials"}
                    </Button>
                    <Button className="w-50" variant="danger"  onClick={() => removeEskap(id)}>Remove</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EskapItem
