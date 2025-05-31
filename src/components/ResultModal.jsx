import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ result, targetTime, remainingTime, onReset}, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} onClose={onReset} className="result-modal">
      {userLost &&<h2>Você perdeu</h2>}
      {!userLost && <h2> Seu resultado: {score}</h2>}
      <p>
        O tempo foi escolhido foi: <strong>{targetTime}</strong>
      </p>
      <p> Você parou o tempo com {formattedRemainingTime} segundos sobrando. </p>
      <form method="dialog" onSubmit={onReset}>
        <button> Fechar </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
