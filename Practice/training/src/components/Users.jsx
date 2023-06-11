import React, { useEffect, useState } from 'react'

function Users() {
    const [username, setUsername] = useState([])
    const [clicked, setClicked] = useState()

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await response.json()
            setUsername(data.map((element) => {
                return element.username
            }))
        }
        fetchData()
    }, [])


    function handleOnClick(){
        if (clicked) {
        const longer = [...username].sort((a,b) => {
            return b.length - a.length
        })
        setUsername(longer)
        console.log(username) }

        else {
            const longer = [...username].sort((a,b) => {
                return a.length - b.length
            })
            setUsername(longer)
            console.log(username)
        }

        setClicked(!clicked)
    }

    const sortText = clicked ? 'Ordinamento decrescente' : 'Ordinamento crescente'

  return (
    <div>
        <button onClick={handleOnClick}>{sortText}</button>
        
        <ul>
            {username.map((element, index) => {
                return <li key={index}>{element}</li>
            })}
        </ul>
    </div>
  )
}

export default Users