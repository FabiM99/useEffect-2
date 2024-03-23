import { useEffect, useState } from "react";

export function Clock(){
    const [date, setDate] = useState(new Date())

    useEffect(() =>{
        console.log("Setting up clock")

        const intervalId = setInterval(() =>{
            setDate(new Date())
        }, 1000)

        return () => {
            console.log("clearing clock")

            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="clock-container">
             <h2>CURRENT TIME IS</h2>
          <div className="clock">
            <span className="hour">{date.toLocaleTimeString()}</span>
          </div>
        </div>
    )
}