import React, {useState, useEffect} from 'react'
import EskapItem from './EskapItem';
import axios from '../axios';


function EskapList() {

    const [eskapList, setEskapList] = useState([]);
    const [eskapFilter, setEskapFilter] = useState('all');

    const [filtre, setFiltre] = useState("");

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/eskaps/');
            setEskapList(req.data);
        }
        fetchData();
    } , []);

    return (
        <>
            <select value={eskapFilter} onChange={(event) => setEskapFilter(event.target.value)}>
                <option value='all'>All Eskaps</option>
                <option value="officials">Official</option>
                <option value="nonofficials">Non Official</option>
            </select>
            <input placeholder="Nom" type="text" value={filtre} onChange={(event) => setFiltre(event.target.value)}></input>
            <div className="eskapList" style={{display: 'flex', flexDirection: 'column'}}>
                {
                    eskapList.length > 0 ? eskapList.map((elem, index) => elem.name.includes(filtre) ? <EskapItem eskap={elem} key={index} filter={eskapFilter}/> : null) : <p>Empty List</p>
                }
            </div>
        </>
    )
}

export default EskapList;