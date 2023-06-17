import React, { useState, useEffect, useRef } from 'react'


function Form({initialData}) {
        
        const [form, setForm] = useState({
          model: initialData.model,
          year: initialData.year,
          color: initialData.color,
        })

        const formRef = useRef();
        
        useEffect(() => {
          
            setForm({
              model: "",
              year: "",
              color: ""
            })
          
        }, [initialData])

        const modelRef = useRef()
        const yearRef = useRef()
        const colorRef = useRef()
        
        function handleModel() {
          setForm({...form, model: modelRef.current.value})
        }
      
        function handleYear() {
          setForm({...form, year: yearRef.current.value})
        }
      
        function handleColor() {
          setForm({...form, color: colorRef.current.value})
        }
      
        function handleSubmit(event) {
          event.preventDefault()
          console.log(form)
        }

       
      
        return (
          <div>
            <h1>Form - esercizio 40</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>Model</label>
              <input ref={modelRef} onChange={handleModel} value={form.model}/>
      
              <br /><br />
      
              <label>Year</label>
              <input ref={yearRef} onChange={handleYear} value={form.year}/>
      
              <br /><br />
      
              <label>Color</label>
              <input ref={colorRef} onChange={handleColor} value={form.color}/>
      
              <br /><br />
      
              <button>Submit</button>
            </form>
          </div>
        )
      }
    

export default Form