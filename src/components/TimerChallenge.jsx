import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const isTimerActive = timerRemaining > 0 && timerRemaining < targetTime * 1000

  const timer = useRef();
  const dialog = useRef();

  if (timerRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset(){
    setTimerRemaining(targetTime * 1000);
  }  

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining(prevTimerRemaining => prevTimerRemaining - 10)
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timerRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} segundo{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {" "}
            {isTimerActive ? "Parar" : "Começar"} o desafio
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive
            ? "Contador está ativo..."
            : "O contador está desativado."}
        </p>
      </section>
    </>
  );
}
