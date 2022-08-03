import { useState } from 'react'
import './Board.css'
import { TTicTacToeSquareValue } from '../util/types'

interface IBoardProps {
  size: number
}

const Board: React.FC<IBoardProps> = (props) => {
  const initBoard = Array(props.size).fill(Array(props.size).fill(null))
  const [boardState, setBoardState] = useState(initBoard)
  const [isPlaying, setIsPlaying] = useState<'X' | 'O'>('X')


  const setSquareValue = (x: number, y: number) => {

    setBoardState(prevState => {
      const updated = JSON.parse(JSON.stringify(prevState))
      updated[x][y] = isPlaying
      return updated
    })
    setIsPlaying(player => {
      return player === "X" ? 'O' : 'X'
    })
  }

  const renderBoard = () => {
    return boardState.map((row: TTicTacToeSquareValue[], x: number) => {
      return <div className="row" key={x}>
        {row.map((value: TTicTacToeSquareValue, y: number) => {
          return <div
            key={y}
            className='boardSquare'
            onClick={() => { setSquareValue(x, y) }}
          >
            {value}
          </div>
        })}
      </div>
    })
  }

  return <div className='board'>
    {renderBoard()}
  </div>;
};

export default Board;