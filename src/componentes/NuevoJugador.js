import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; //useNavigate redirige al usuario
import {Link} from 'react-router-dom';

const NuevoJugador = () =>{
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [age, setAge] = useState(20);
    const [imagen, setImagen] = useState("");
    const [play1, setPlay1] = useState(false);
    const [notplay1, setNotplay1] = useState(false);
    const [undef1, setUndef1] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [notplay2, setNotplay2] = useState(false);
    const [undef2, setUndef2] = useState(false);
    const [play3, setPlay3] = useState(false);
    const [notplay3, setNotplay3] = useState(false);
    const [undef3, setUndef3] = useState(false);
    const [errors, setErrors] = useState({}); //errors.ATRIBUTO.message

    const navigate = useNavigate();

    const guardarJugador = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/jugadores",{
            name,
            position,
            age,
            imagen,
            play1,
            notplay1,
            undef1,
            play2,
            notplay2,
            undef2,
            play3,
            notplay3,
            undef3,
        })
        .then(res => navigate("/players/list"))
        .catch(err => {
            setErrors(err.response.data.errors)
        });
    }

    return(
        <div>
            <div className="nav">
            <Link to = "/players/list" className='nav-item'><h1>Manage Players|</h1></Link>
            <Link to ="/status/game/1" className='nav-item'><h1>Manage Player Status</h1></Link>
            </div>
            <h3>Nuevo Jugador</h3>
            <form onSubmit={guardarJugador}>
                <div>
                    <label>Player Name: </label>
                    <input type='text' name="name" value={name} className="form-control" onChange={e => setName(e.target.value)}/>
                    {errors.name ? <span className='text-danger'>{errors.name.message}</span>: null}
                </div>
                <div>
                    <label>Preferred Position: </label>
                    <input type='text' name="position" value={position} className="form-control" onChange={e => setPosition(e.target.value)}/>
                    {errors.position ? <span className='text-danger'>{errors.position.message}</span>: null}
                </div>
                <input type='submit' className='btn btn-success mt-3' value="ADD"/>
            </form>
        </div>
    )
}

export default NuevoJugador;