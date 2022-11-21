import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>First task</h1>
      <span className={ready? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
