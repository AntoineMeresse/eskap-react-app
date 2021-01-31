import React, {useState, useEffect} from 'react'
import EskapItem from './EskapItem';
import axios from '../axios';


function EskapList() {

    const [eskapList, setEskapList] = useState([]);
    const [eskapFilter, setEskapFilter] = useState('/');

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/eskaps'+eskapFilter);
            setEskapList(req.data);
        }
        fetchData();
    }, [eskapFilter]);

    return (
        <>
            <select value={eskapFilter} onChange={(event) => setEskapFilter(event.target.value)}>
                <option value='/'>All Eskaps</option>
                <option value="/officials/">Official</option>
                <option value="/nonofficials/">Non Official</option>
            </select>
            <div className="eskapList" style={{display: 'flex', flexDirection: 'row'}}>
                {
                    eskapList.map((elem, index) => <EskapItem eskap={elem}/>)
                }
            </div>
        </>
    )
}

export default EskapList;