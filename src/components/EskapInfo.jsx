import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from '../axios';
import { Button } from 'react-bootstrap';

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

    return (
        <div className="pt-3">
            <h2>Eskap with ID : {id}</h2>
            <form className="d-flex flex-column">
                <label>Nom : <input type="text" value={name} onChange={(event) => setName(event.target.value)}/></label>
                <label>Difficulty : <input type="text" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}/></label>
                <label>Min Price : <input type="number" value={minprice} onChange={(event) => setMinPrice(event.target.value)}/></label>
                <label>Max Price : <input type="number" value={maxprice} onChange={(event) => setMaxPrice(event.target.value)}/></label>
                <label>ImageUrl : <input type="text" value={imgurl} onChange={(event) => setImgUrl(event.target.value)}/></label>
                <label>Description : <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></label>
                <label>Number : <input type="number" value={number} onChange={(event) => setNumber(event.target.value)}/></label>
                <label>street : <input type="text" value={street} onChange={(event) => setStreet(event.target.value)}/></label>
                <label>city : <input type="text" value={city} onChange={(event) => setCity(event.target.value)}/></label>
                <label>country : <input type="text" value={country} onChange={(event) => setCountry(event.target.value)}/></label>
                <label>latitude : <input type="number" value={latitude} onChange={(event) => setLatitude(event.target.value)}/></label>
                <label>longitude : <input type="number" value={longitude} onChange={(event) => setLongitude(event.target.value)}/></label>
                <label>official : <input type="checkbox" checked={official} onChange={() => setOfficial(!official)}/></label>
                <Button>Change datas</Button>
            </form>
        </div>
    )
}

export default EskapInfo
