    import { useState } from "react";


    const Square = ({ value , idx , handleChange,istrue })=>
    {
        return (
            <button 
                disabled={istrue}
                className={`w-10 h-10 outline-none border-1 ${istrue?'bg-gray-300':'bg-gray-500'}  text-white font-bold`}
                onClick={()=>handleChange(idx)}
            >{value}</button>
        )
    }

    const TicTacToe = ()=>
    {
        const [ squares , setSquares ] = useState( Array(9).fill("") )
        const [ winner , setWinner] = useState(null)
        const [ isXTurn , setXTurn ] = useState(true)
        const [isGameOver , setGameOver ] = useState(false)

        const checkWinner = (board, target) => 
        {
            const wins = [
                        [0,1,2], [3,4,5], [6,7,8], // rows
                        [0,3,6], [1,4,7], [2,5,8], // cols
                        [0,4,8], [2,4,6]           // diagonals
                    ];

            return wins.some(pattern =>
                pattern.every(i => board[i] === target)
            );
        };

        const checkDraw = (board) => 
        {
            return board.every(square => square !== "");
        };
        
        const handleChange = (idx)=>
        {
            let copy = [...squares]

            const target = isXTurn ? 'X' : 'O'
            copy[idx] = target;

            console.log(copy , target);
            setSquares(()=>copy)

            if( checkWinner(copy ,target) )
            {
                setWinner(`${target} won the game`)
                setGameOver(true)
                return
            }
            else if( checkDraw(copy) )
            {
                setWinner('Match is tied!')
                setGameOver(true)
                return
            }
            setXTurn(!isXTurn)
        }

        const handleReset = ()=>
        {
            setSquares( Array(9).fill("") )
            setGameOver(false)
            setWinner("")
            setXTurn(true)
        }


        return(
            <div className="border-2 border-gray-500 w-full h-screen flex flex-col gap-2 justify-center items-center ">

                <h1 className="text-purple-400 font-bold">Tic Tac Toe</h1>
                <div className="flex flex-col gap-1">

                    <div className="flex flex-row gap-1">
                        <Square value={squares[0]} handleChange={handleChange} idx={0} istrue={isGameOver} />
                        <Square value={squares[1]} handleChange={handleChange} idx={1} istrue={isGameOver} />
                        <Square value={squares[2]} handleChange={handleChange} idx={2} istrue={isGameOver} />
                    </div>

                    <div className="flex flex-row gap-1">
                        <Square value={squares[3]} handleChange={handleChange} idx={3} istrue={isGameOver} />
                        <Square value={squares[4]} handleChange={handleChange} idx={4} istrue={isGameOver} />
                        <Square value={squares[5]} handleChange={handleChange} idx={5} istrue={isGameOver} />
                    </div>

                    <div className="flex flex-row gap-1">
                        <Square value={squares[6]} handleChange={handleChange} idx={6} istrue={isGameOver} />
                        <Square value={squares[7]} handleChange={handleChange} idx={7} istrue={isGameOver} />
                        <Square value={squares[8]} handleChange={handleChange} idx={8} istrue={isGameOver} />
                    </div>
                </div>

                {
                    winner ? 
                        (
                            <div>
                                <h1 className='text-green-500 font-bold'>{winner}</h1>
                                <button 
                                    className="outline-none bg-red-400 p-1 text-white rounded-md"
                                    onClick={handleReset}
                                >Restart</button>
                            </div>
                        ) : 
                    <h1 className="text-xl font-bold text-blue-500">
                        {
                            isXTurn ? 'X Turn':'O Turn'
                        }
                    </h1>
                }

            </div>
        )
    }

    export default TicTacToe;