import React, {useState} from 'react'

function Input() {
  const [description, setDescription] = useState("")

  const handlechange = (e) => {
    setDescription(e.target.value)
  }

  const formSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = {"description" : description}
      await fetch("http://localhost:7000/todo",{
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(body)
      })

      window.location('/')
    }
    catch (err){
      console.log(err)
    }
  }

  return (
    <main className='formWrapper' >
      <form className='todoForm' onSubmit={formSubmit}>
        <input type="text" name='description' required className='inputField' onChange={handlechange}/>
        <input type="submit" value="Add" className='submitBtn'/>
      </form>
    </main>
  )
}

export default Input