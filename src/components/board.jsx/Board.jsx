import React, { useEffect, useState } from 'react';
import Square from '../squares/Square';
import "./board.css";

const Board = () => {
    const [cellInput, setCellInput] = useState(Array(9).fill(null));
    const [highlight, setHighlight] = useState(Array(9).fill(false));
    const [turn, setTurn] = useState("X");
    const [gameOver, setGameOver] = useState(false);
    useEffect(() => {
        checkWinner();
        // eslint-disable-next-line
    }, [cellInput]);

    const checkWinner = () => {
        const winnerArr = [
            [0, 1, 2], // horizontal row
            [3, 4, 5], // horizontal row
            [6, 7, 8], // horizontal row
            [0, 3, 6], // vertical column
            [1, 4, 7], // vertical column
            [2, 5, 8], // vertical column
            [0, 4, 8], // diagonal
            [2, 4, 6] // diagonal
        ];

        for (let winners of winnerArr) {
            let [a, b, c] = winners;
            // console.log(a, b, c);
            if (cellInput[a] && cellInput[b] && cellInput[c] && cellInput[a] === cellInput[b] && cellInput[a] === cellInput[c]) {
                let newTxt = "winner " + cellInput[a];
                setTurn(newTxt);
                const highlightCopy = [...highlight];
                highlightCopy[a] = true;
                highlightCopy[b] = true;
                highlightCopy[c] = true;
                setHighlight(highlightCopy);
                setGameOver(true);
                return true;
            }
        }
    }

    const handleclick = (index) => {
        const cellInputCopy = [...cellInput];
        if (!cellInputCopy[index]) {
            cellInputCopy[index] = turn;
            setCellInput(cellInputCopy);
            setTurn(turn === "X" ? "0" : "X");
        }
    }

    const handleReset = () => {
        setCellInput(Array(9).fill(null));
        setHighlight(Array(9).fill(false));
        setTurn("X");
        setGameOver(false);
    }


    return (
        <div className="game">
            {!gameOver && <h2>Turn : {turn} </h2>}
            {gameOver && <div className="winner-info">
                <h2 className="winner-txt"> {turn} </h2>
                <img className="winner-video" src="./video/excited.gif" alt="" />
            </div>}
            <div className="board">
                <Square gameOver={gameOver} highlight={highlight[0]} value={cellInput[0]} click={() => handleclick(0)} />
                <Square gameOver={gameOver} highlight={highlight[1]} value={cellInput[1]} click={() => handleclick(1)} />
                <Square gameOver={gameOver} highlight={highlight[2]} value={cellInput[2]} click={() => handleclick(2)} />
                <Square gameOver={gameOver} highlight={highlight[3]} value={cellInput[3]} click={() => handleclick(3)} />
                <Square gameOver={gameOver} highlight={highlight[4]} value={cellInput[4]} click={() => handleclick(4)} />
                <Square gameOver={gameOver} highlight={highlight[5]} value={cellInput[5]} click={() => handleclick(5)} />
                <Square gameOver={gameOver} highlight={highlight[6]} value={cellInput[6]} click={() => handleclick(6)} />
                <Square gameOver={gameOver} highlight={highlight[7]} value={cellInput[7]} click={() => handleclick(7)} />
                <Square gameOver={gameOver} highlight={highlight[8]} value={cellInput[8]} click={() => handleclick(8)} />
            </div>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>

    )
}

export default Board