import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import { useState } from "react";

function Square({value, onSquareClick}){
    return (
        <button className="square">
            {value}
        </button>
    );
}

function Board({xIsNext, squares, onPlay}){
    function handleClick(i){
        if (calculateWinner(squares) || squares[i] ){
            return;
        }
        const nextSquares[i] = squares.slice();
        if (xIsNext){
            nextSquares[i] = "X"
        }else{
            nextSquares[i] = "O"
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = "winner: " + winner;
    }else{
        status = "Next player: " + (xIsNext ? "X": "O");
    }
    return (
        <><div className="status">{status}</div><div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>

            <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        </div>
        
        
        </>
    )
}