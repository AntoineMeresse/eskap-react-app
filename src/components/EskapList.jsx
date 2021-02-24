import React, {useState, useEffect} from 'react'
import EskapItem from './EskapItem';
import axios from '../axios';
import { Button } from 'react-bootstrap';

function EskapList() {

    const [eskapList, setEskapList] = useState([]);
    const [eskapFilter, setEskapFilter] = useState('all');

    const [filtre, setFiltre] = useState("");

    async function fetchData() {
        console.log("Fetch data");
        const req = await axios.get('/eskaps/');
        setEskapList(req.data);
    }

    useEffect(() => {
        fetchData();
    } , []);

    return (
        <div className="p-3">
            <div className="d-flex flex-row justify-content-between">
            <Button onClick={fetchData}>Reload</Button>
            <select value={eskapFilter} onChange={(event) => setEskapFilter(event.target.value)}>
                <option value='all'>All Eskaps</option>
                <option value="officials">Official</option>
                <option value="nonofficials">Non Official</option>
            </select>
            <input placeholder="Nom" type="text" value={filtre} onChange={(event) => setFiltre(event.target.value)}></input>
            </div>
            <div className="eskapList" style={{display: 'flex', flexDirection: 'column'}}>
                {
                    eskapList.length > 0 ? eskapList.map((elem, index) => 
                        elem.name.includes(filtre) ? 
                            <EskapItem eskap={elem} key={index} filter={eskapFilter} reloadInfos={fetchData}/> : null) 
                                : 
                            <p>Empty List</p>
                }
            </div>
        </div>
    )
}

export default EskapList;