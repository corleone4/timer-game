import { useRef, useImperativeHandle, forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime, remainingTime},ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost &&<h2>Você perdeu</h2>}
      <p>
        O tempo foi escolhido foi: <strong>{targetTime}</strong>
      </p>
      <p> Você parou o tempo com X segundo{} sobrando. </p>
      <form method="dialog">
        <button> Fechar </button>
      </form>
    </dialog>
  );
});
export default ResultModal;
