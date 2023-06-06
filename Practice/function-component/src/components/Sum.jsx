function Sum({numbers}) {
    return (
        <h2>
            {numbers.reduce((a, b) => {
                return a + b  
            })}
        </h2>
    )
}

export default Sum;