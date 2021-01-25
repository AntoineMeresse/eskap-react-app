import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'

function EskapItem({eskap}) {

    const {id, name, address, theme, difficulty, price} = eskap;
    const {number, street, city} = address;
    
    return (
        <Card className="eskapItem m-1" style={{width: '24%'}}>
            <Card.Body>
                <Card.Title>{name} | id : {id} </Card.Title>
                <Card.Subtitle>{`Address : ${number} ${street} ${city}`}</Card.Subtitle>
                <ListGroup variant="list-group-flush m-2">
                    <ListGroup.Item>Theme : {theme}</ListGroup.Item>
                    <ListGroup.Item>Difficulty : {difficulty}</ListGroup.Item>
                    <ListGroup.Item>Price : {price}</ListGroup.Item>
                </ListGroup>
                <div className="eskapItem-buttons">
                    <Button className="w-50" variant="success">Add</Button>
                    <Button className="w-50" variant="danger">Remove</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EskapItem
