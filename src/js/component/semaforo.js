import React, { useState } from "react";

const Semaforo = () => {
	const [on, setOn] = useState("");

	return (
		<div className="fondo">
			<div
				className={"luzRoja" + (on == "rojo" ? " prendido" : "")}
				onClick={() => {
					setOn("rojo");
				}}></div>
			<div
				className={
					"luzAmarilla" + (on == "amarillo" ? " prendido" : "")
				}
				onClick={() => {
					setOn("amarillo");
				}}></div>
			<div
				className={"luzVerde" + (on == "verde" ? " prendido" : "")}
				onClick={() => {
					setOn("verde");
				}}></div>
		</div>
	);
};

export default Semaforo;
