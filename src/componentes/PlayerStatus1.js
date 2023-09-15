import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";


const PlayerStatus1 = () =>{
    const [jugadores, setJugadores] = useState([]);
    const [play1, setPlay1] = useState(false);
    const [notplay1, setNotplay1] = useState(false);
    const [undef1, setUndef1] = useState(false);
    const [click, setClick] = useState(1);

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/jugadores")
        .then(res => setJugadores(res.data))
        .catch(err => console.log(err));
    }, [click])

    const play = (id) => {
        axios.get("http://localhost:8000/api/jugadores/"+id)
        .then( res=>{
            setPlay1(res.data.play1);
            if(play1===true){
                setPlay1(false);
                axios.put("http://localhost:8000/api/jugadores/"+id,{
                    play1,
                })
                .then(res => navigate("/status/game/1"))
                .catch(err=> console.log(err));
            }
            else{
                setPlay1(true);
                axios.put("http://localhost:8000/api/jugadores/"+id,{
                    play1,
                })
                .then(res => navigate("/status/game/1"))
                .catch(err=> console.log(err));
            }
            
        })
        .catch(err=> console.log(err));
    }

    return (
        <div>
            <div className="nav">
            <Link to = "/players/list" className='nav-item'><h1>Manage Players|</h1></Link>
            <Link to ="/status/game/1" className='nav-item'><h1>Manage Player Status</h1></Link>
            </div>
            <h3>Player Status - Game 1</h3>
            <div className="nav">
            <Link to ="/status/game/1" className='nav-item'><h1>Game 1|</h1></Link>
            <Link to ="/status/game/2" className='nav-item'><h1>Game 2|</h1></Link>
            <Link to ="/status/game/3" className='nav-item'><h1>Game 3|</h1></Link>
            </div>
            <div className='card'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((jugador, index) =>(
                            <tr key={index}>
                                <td>{jugador.name}</td>
                                <td>
                                {
                                    jugador.play1?
                                    <button className= 'btn btn-danger' onClick={() => play(jugador._id)}>Playing</button>:<p><button className= 'btn' onClick={() => play(jugador._id)}>Playing</button></p>
                                }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default PlayerStatus1;