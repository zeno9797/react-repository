import React, {useEffect, useState} from 'react'
import DisplayUser from './DisplayUser'

function FetchUser() {
   const [arr, setArr] = useState([])

    


    useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            console.log(data)

            setArr(data)
            console.log(arr)
        }

        fetchData()
    }, [])



  return (
    <div>
        {arr.map((element, index) => {
            return <DisplayUser key={index} el={element}/>
        })}
    </div>
  )
}

export default FetchUser