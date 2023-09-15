import { Route, Routes } from "react-router-dom";
import List from "./componentes/List";
import NuevoJugador from "./componentes/NuevoJugador";
import PlayerStatus1 from "./componentes/PlayerStatus1";

const App =() => {
  return (
    <div className="Container">
      <Routes>
        <Route path = '/players/list' element ={<List/>}/>
        <Route path = '/players/addplayer' element ={<NuevoJugador/>}/>
        <Route path="/status/game/1" element = {<PlayerStatus1/>}/>
      </Routes>
    </div>
  );
}

export default App;
