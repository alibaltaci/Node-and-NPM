import { useEffect, useState } from "react"

type CounterProps = {
    initialValue?: number;
}

const Counter = ({initialValue = 0}: CounterProps) => {

    const [count, setCount] = useState<number>(initialValue)

    useEffect( () => {
        if(count < 0){
            setCount(0)
        }
    }, [count])
    
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <button onClick={() => setCount( count => count + 1) }>+</button>
            <p>{count}</p>
            <button 
                disabled={count === 0}
                onClick={() => setCount( count => count - 1) }
            >
            -
            </button>
        </div>
    </div>
  )
}

export default Counter