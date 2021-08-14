import React, { useCallback, useRef } from "react";

function Modal({ children }) {

  let ref = useRef();

  let close = useCallback(() => {
    ref.current.style.display = "none";
  }, [])

  return (
    <div className="modal" ref={ref}>
      <style>
        {`
          .modal {
            position: absolute;
            background: #8ea195;
            padding: 10px;
            top: 17vh;
            left: 10%;
            width: 80%;
            height: 60vh;
            box-shadow: 2px 2px 2px black;
          }
          .cross {
            font-size: 20px;
            position: absolute;
            right: 10px;
          }
        `}
      </style>
      <span className="cross" onClick={close}>&times;</span>
      {children}
    </div>
  );
}

export default Modal;