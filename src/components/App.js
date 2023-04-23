import { useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";


const App = () => {
 
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score:0,
      id: 1
    },
    {
      name: "Treasure",
      score:0,
      id: 2
    },
    {
      name: "Ashley",
      score:0,
      id: 3
    },
    {
      name: "James",
      score:0,
      id: 4
    }
  ]);
  
    const totalScore= players.reduce((sum,e)=>{
      return e.score+sum;
    },0)
 
  const handleScoreChane = (id,delta) => {
    setPlayers(prevplayer=>prevplayer.map(e=>{
    if(e.id==id){
      return {
        name:e.name,
        score:e.score+delta,
        id:e.id
      }
    }
    return e;
    }))
   

  }

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }
const handleAddPlayer=(name)=>{
setPlayers(prevPlayers =>[
  ...prevPlayers,
  {
    name:name,
    score:0,
    id:players.length+1
  }
])
}
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
        totalScore={totalScore}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChane}
          
        />
      )}
      <AddPlayerForm 
      addPlayer={handleAddPlayer}
      />
    </div>
  );

}

export default App;
