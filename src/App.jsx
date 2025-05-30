import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Fácil"} targetTime={1}/>
        <TimerChallenge title={"Médio"} targetTime={5}/>
        <TimerChallenge title={"Dificil"} targetTime={10}/>
        <TimerChallenge title={"Extremo"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
