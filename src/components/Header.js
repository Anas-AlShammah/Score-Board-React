import Stats from "./Stats"; 
import StopWatch from "./StopWatch";
 const Header = (props) => {
    return (
      <header>
        <Stats totalPlayers={props.totalPlayers} totalScore={props.totalScore}/>
        <h1>{props.title}</h1>
       <StopWatch />
      </header>
    );
  }
  export default Header;