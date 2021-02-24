import React, {useState} from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import axios from '../axios';
import {Link} from "react-router-dom";

function EskapItem({eskap, filter, reloadInfos}) {

    const {id, name, number, street, city, themes, difficulty, minprice, maxprice, official} = eskap;
    const address = `${number} ${street} ${city}`;
    const [isOfficial, setIsOfficial] = useState(official);

    const config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {},
      };


    async function removeEskap(id) {
        //console.log("Remove eskap game ==> Id : "+id);
        axios.delete(`/eskaps/${id}`)
        .catch(err => console.log(err))
        .then(_ => reloadInfos());
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
               <Card className="eskapItem m-1" style={{}}>
                    <Card.Body>
                        <Card.Title><Link to={`/eskap/${id}`}>{name} | id : {id} </Link></Card.Title>
                        <Card.Subtitle>{`Adresse : ${address}`}</Card.Subtitle>
                        <ListGroup variant="list-group-flush m-2">
                            <ListGroup.Item><h3>Themes : </h3> <ul>{themes.map((elem, index) => <li key={index}>{elem}</li>)}</ul></ListGroup.Item>
                            <ListGroup.Item>Difficulté : {difficulty}</ListGroup.Item>
                            <ListGroup.Item>Prix : de {minprice} à {maxprice} €</ListGroup.Item>
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
