import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from '../axios';
import { Card, Form, Button, Alert } from 'react-bootstrap'

function EskapInfo() {
    
    let {id} = useParams();

    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [minprice, setMinPrice] = useState(0);
    const [maxprice, setMaxPrice] = useState(0);
    const [imgurl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [number, setNumber] = useState(0);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [official, setOfficial] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/eskaps/'+id);
            const res = req.data;
            //console.log(res);
            setName(res.name);
            setDifficulty(res.difficulty);
            setMinPrice(res.minprice);
            setMaxPrice(res.maxprice);
            setImgUrl(res.imgurl);
            setDescription(res.description);
            setNumber(res.number);
            setStreet(res.street);
            setCity(res.city);
            setCountry(res.country);
            setLatitude(res.latitude);
            setLongitude(res.longitude);
            setOfficial(res.official);
        }
        fetchData(); 
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Card className="pt-3">
            <Card.Body>
            <h2>Eskap with ID : {id}</h2>
                <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control type="text" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Min Price</Form.Label>
                        <Form.Control type="number" value={minprice} onChange={(event) => setMinPrice(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Max Price</Form.Label>
                        <Form.Control type="number" value={maxprice} onChange={(event) => setMaxPrice(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>ImageUrl</Form.Label>
                        <Form.Control type="text" value={imgurl} onChange={(event) => setImgUrl(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" value={number} onChange={(event) => setNumber(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" value={street} onChange={(event) => setStreet(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={city} onChange={(event) => setCity(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={country} onChange={(event) => setCountry(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="number" value={latitude} onChange={(event) => setLatitude(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="number" value={longitude} onChange={(event) => setLongitude(event.target.value)}/></Form.Group>
                    <Form.Group>
                        <Form.Label>Official</Form.Label>
                        <Form.Control type="checkbox" checked={official} onChange={() => setOfficial(!official)}/></Form.Group>
                    <Button type="button" className="btn btn-secondary">Change datas (Not Implemented yet)</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default EskapInfo
