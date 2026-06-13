import {useState} from "react";


     function Square({value , onSquareClick}) {
        return(
            <>
            <button onClick={onSquareClick} className="square">{value}</button>
            </>
        );
    }

export default function Board() {
    // const [element, setElement] = useState(null);
    const [element, setElement] = useState(Array(9).fill(null));
    function handleClick(i){
        const newArray = element.slice();
        newArray[i] = 'X';
        setElement(newArray);

        
    }


        return (
            <>
           <div className="board-row">
            <Square onSquareClick={()=>{handleClick(0)}} value={element[0]}/>
            <Square onSquareClick={()=>{handleClick(1)}} value={element[1]}/>
            <Square onSquareClick={()=>{handleClick(2)}} value={element[2]}/>
           </div>
           <div className="board-row">
            <Square onSquareClick={()=>{handleClick(3)}} value={element[3]}/>
            <Square onSquareClick={()=>{handleClick(4)}} value={element[4]}/>
            <Square onSquareClick={()=>{handleClick(5)}} value={element[5]}/>
           </div>
           <div className="board-row">
            <Square onSquareClick={()=>{handleClick(6)}} value={element[6]}/>
            <Square onSquareClick={()=>{handleClick(7)}} value={element[7]}/>
            <Square onSquareClick={()=>{handleClick(8)}} value={element[8]}/>
           </div>
            </> 
        );
}


