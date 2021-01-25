import React, {useState, useEffect} from 'react'
import EskapItem from './EskapItem';
import axios from '../axios';


function EskapList() {

    const [eskapList, setEskapList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/eskaps/');
            setEskapList(req.data);
        }
        fetchData();
    }, []);

    return (
        <div className="eskapList" style={{display: 'flex', flexDirection: 'row'}}>
            {
                eskapList.map((elem, index) => <EskapItem eskap={elem}/>)
            }
        </div>
    )
}

export default EskapList;