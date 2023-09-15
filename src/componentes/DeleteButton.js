import React from 'react';
import axios from 'axios';
export default props => {
    const { jugadorId, successCallback } = props;
    const deleteJugador = e => {
        axios.delete('http://localhost:8000/api/jugadores/' + jugadorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className= 'btn btn-danger'onClick={deleteJugador}>
            Delete
        </button>
    )
}