import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import axios from '../axios';

function EskapInfo() {
    
    let {id} = useParams();

    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [price, setPrice] = useState(0);
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
            setPrice(res.price);
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
    }, []);

    return (
        <div>
            <p>ID : {id}</p>
            <form>
                <div><label>Nom : <input type="text" value={name} onChange={(event) => setName(event.target.value)}/></label></div>
                <div><label>Difficulty : <input type="text" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}/></label></div>
                <div><label>Price : <input type="number" value={price} onChange={(event) => setPrice(event.target.value)}/></label></div>
                <div><label>ImageUrl : <input type="text" value={imgurl} onChange={(event) => setImgUrl(event.target.value)}/></label></div>
                <div><label>Description : <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></label></div>
                <div><label>Number : <input type="number" value={number} onChange={(event) => setNumber(event.target.value)}/></label></div>
                <div><label>street : <input type="text" value={street} onChange={(event) => setStreet(event.target.value)}/></label></div>
                <div><label>city : <input type="text" value={city} onChange={(event) => setCity(event.target.value)}/></label></div>
                <div><label>country : <input type="text" value={country} onChange={(event) => setCountry(event.target.value)}/></label></div>
                <div><label>latitude : <input type="number" value={latitude} onChange={(event) => setLatitude(event.target.value)}/></label></div>
                <div><label>longitude : <input type="number" value={longitude} onChange={(event) => setLongitude(event.target.value)}/></label></div>
                <div><label>official : <input type="checkbox" checked={official} onChange={() => setOfficial(!official)}/></label></div>
            </form>
        </div>
    )
}

export default EskapInfo
