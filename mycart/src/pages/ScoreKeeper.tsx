import { useEffect, useState } from "react"

const ScoreKeeper = () => {
    const [score,setScore] = useState<number>(parseInt(localStorage.getItem('score')!) || 0)
    useEffect(()=>{
        localStorage.setItem('score',score.toString())
    },[score])
    return (
        <div>
        <h1>Current score:{score}</h1>
        <div>
        <button onClick={()=> {setScore(prevScore=> prevScore-1)}}>-</button>&nbsp;
        <button onClick={()=> {setScore(prevScore=> prevScore+1)}}>+</button>
        </div>
        </div>
    )
}
export default ScoreKeeper