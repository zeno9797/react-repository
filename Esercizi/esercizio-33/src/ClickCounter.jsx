import React, {useState, useEffect} from 'react'

function ClickCounter({inputValue = 0}) {
    const [count, setCount] = useState(inputValue)

    useEffect(() => {
        console.log(count)

        return () => {
            setTimeout(() => {
                setCount(0)
            }, 2000 )
        }
    }, [count])

    function handleOnClick() {
        setCount((c) => {
            return c + 1
        })
    }

  return (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={handleOnClick}>+</button>
    </div>
  )
}

export default ClickCounter