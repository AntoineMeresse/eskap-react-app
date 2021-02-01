import React, {useState} from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import axios from '../axios';
import {Link} from "react-router-dom";

function EskapItem({eskap, filter}) {

    const {id, name, number, street, city, themes, difficulty, price, official} = eskap;
    const address = `${number} ${street} ${city}`;
    const [isOfficial, setIsOfficial] = useState(official);


    function removeEskap(id) {
        console.log("Remove eskap game ==> Id : "+id);
    }

    async function changeFavState(id) {
        const method = isOfficial ? "deleteofficial" : "addofficial"; 
        const response = await axios.put(`/eskaps/${method}/${id}`);
        if (response.status === 200) {
            setIsOfficial(!isOfficial);
        }
    }

    return (
        <>
            {((filter === "all") || (filter === "officials" && isOfficial) || (filter === "nonofficials" && !isOfficial))&&
               <Card className="eskapItem m-1" style={{width: '24%'}}>
                    <Card.Body>
                        <Card.Title><Link to={`/${id}`}>{name} | id : {id} </Link></Card.Title>
                        <Card.Subtitle>{`Address : ${address}`}</Card.Subtitle>
                        <ListGroup variant="list-group-flush m-2">
                            <ListGroup.Item>Theme : {themes.map((e) => <span>{e}</span>)}</ListGroup.Item>
                            <ListGroup.Item>Difficulty : {difficulty}</ListGroup.Item>
                            <ListGroup.Item>Price : {price}</ListGroup.Item>
                        </ListGroup>
                        <div className="eskapItem-buttons">
                            <Button className="w-50" onClick={() => changeFavState(id)}>
                                {!isOfficial ? "Add To Officials" : "Remove from Officials"}
                            </Button>
                            <Button className="w-50" variant="danger"  onClick={() => removeEskap(id)}>Remove</Button>
                        </div>
                    </Card.Body>
                </Card>
            }
        </>
    )
}

export default EskapItem
