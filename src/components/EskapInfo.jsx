import React from 'react'
import {useParams} from "react-router-dom";

function EskapInfo() {
    
    let {id} = useParams();
    
    return (
        <div>
            <p>ID : {id}</p>
        </div>
    )
}

export default EskapInfo
