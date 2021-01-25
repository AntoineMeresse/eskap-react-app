import React from 'react'

function EskapItem({eskap}) {

    const {id, name} = eskap;
    return (
        <div className="eskapItem">
            <p>Eskap Id : {id}</p>
            <p>Eskap Name : {name}</p>
            <hr></hr>
        </div>
    )
}

export default EskapItem
