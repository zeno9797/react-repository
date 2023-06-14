import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'


function Component({obj}) {
    const [arr, setArr] = useState([])

    useEffect(() => {
      setArr(obj.filter((element) => {
            return element.age > 18
    }))}, [obj])

    const memoizedArr = useMemo(() => arr, [arr])

  return (
    <div>
        {
            memoizedArr.map((element, index) => {
                return <p key={index}>name: {element.name} <br /> age: {element.age}</p>
            })
        }
    </div>
  )
}

export default Component