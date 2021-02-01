import React, {useState, useEffect} from 'react'
import EskapItem from './EskapItem';
import axios from '../axios';


function EskapList() {

    const [eskapList, setEskapList] = useState([]);
    const [eskapFilter, setEskapFilter] = useState('all');

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
            <div className="eskapList" style={{display: 'flex', flexDirection: 'row'}}>
                {
                    eskapList.length > 0 ? eskapList.map((elem, index) => <EskapItem eskap={elem} key={index} filter={eskapFilter}/>) : <p>Empty List</p>
                }
            </div>
        </>
    )
}

export default EskapList;