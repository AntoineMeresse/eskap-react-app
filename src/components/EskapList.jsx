import React from 'react'
import eskapList from '../datas_tmp/eskaps_list.json';
import EskapItem from './EskapItem';


function EskapList() {
    return (
        <div className="eskapList">
            {
                eskapList.map((elem, index) => <EskapItem eskap={elem}/>)
            }
        </div>
    )
}

export default EskapList;