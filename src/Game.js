import { useEffect, useState } from "react";

const Game = () => {
	const [data, setData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
	const [moves, setMoves] = useState(0);
	const [status, setStatus] = useState("playing");

	function ChangeBox(id) {
		if (status != "playing") return;
		let newMoves = moves + 1;
		setMoves(newMoves);
		let letter = '';
		// console.log(newMoves);
		if ((newMoves % 2) === 1) {
			letter = 'X';
		}
		else {
			letter = 'O';
		}
		const a = Number(id[0]);
		const b = Number(id[1]);
		if (data[a][b] === '') {
			const newData = data.map((row, rowIndex) =>
				row.map((cell, colIndex) =>
					rowIndex === a && colIndex === b ? letter : cell
				)
			);
			setData(newData);
			if (checkData(newData)) {
				console.log("we have a winner");
			}
			else if (newMoves === 9) {
				setStatus("It's a Tie");
				return;
			}
		}
	}


	function checkData(data) {
		let win = false;
		let key = 'X';
		if (checkthree(data[0][0], data[0][1], data[0][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[1][0], data[1][1], data[1][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[2][0], data[2][1], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][0], data[1][0], data[2][0], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][1], data[1][1], data[2][1], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][2], data[1][2], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][0], data[1][1], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][2], data[1][1], data[2][0], key)) {
			gameover(key); win = true;
		}
		key = 'O';
		if (checkthree(data[0][0], data[0][1], data[0][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[1][0], data[1][1], data[1][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[2][0], data[2][1], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][0], data[1][0], data[2][0], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][1], data[1][1], data[2][1], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][2], data[1][2], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][0], data[1][1], data[2][2], key)) {
			gameover(key); win = true;
		}
		if (checkthree(data[0][2], data[1][1], data[2][0], key)) {
			gameover(key); win = true;
		}
		return win;
	}

	function gameover(key) {
		if (key === 'X') {
			console.log("Player1 Won!");
			setStatus(`Player1 Wins!`);
		}
		if (key === 'O') {
			console.log("Player2 Won!");
			setStatus("Player2 Wins!");
		}
	}

	function checkthree(a, b, c, key) {
		return a === key && b === key && c === key;
	}

	return (
		<div className="main-container">
			<h1>Tic Tac Toe</h1>
			{(status != "playing" && <h2>{status}</h2>)}
			<div className="game-container">
				<div className="grid-item" onClick={() => ChangeBox("00")}>{data[0][0]}</div>
				<div className="grid-item" onClick={() => ChangeBox("01")}>{data[0][1]}</div>
				<div className="grid-item" onClick={() => ChangeBox("02")}>{data[0][2]}</div>
				<div className="grid-item" onClick={() => ChangeBox("10")}>{data[1][0]}</div>
				<div className="grid-item" onClick={() => ChangeBox("11")}>{data[1][1]}</div>
				<div className="grid-item" onClick={() => ChangeBox("12")}>{data[1][2]}</div>
				<div className="grid-item" onClick={() => ChangeBox("20")}>{data[2][0]}</div>
				<div className="grid-item" onClick={() => ChangeBox("21")}>{data[2][1]}</div>
				<div className="grid-item" onClick={() => ChangeBox("22")}>{data[2][2]}</div>
			</div>

		</div>
	);
}

export default Game;
