import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [player, setPlayer] = useState(null);

  function handleClick(){
    setPlayer(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Bem vindo(a) {player ?? "pessoa desconhecida"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Mudar nome</button>
      </p>
    </section>
  );
}
