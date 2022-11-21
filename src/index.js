import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  const [mensaje, setMensaje] = useState(0);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={()=>{alert("El mensaje es: " + mensaje)}}>save</button>
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);
