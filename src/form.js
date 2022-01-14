import React,{useState}from 'react'
import backendCall from './axios';
function Form({handleSetNote}) {
    const [newNote,setnewNote] = useState("")
    const [newImportant,setImportant] = useState(true)

    const handleCreate = () => {
        let newObj = {
            content: newNote,
            important:newImportant
        }
        backendCall.create(newObj).then(e =>  backendCall.getAll().then(e => handleSetNote(e.data)))
        console.log('create')
        setnewNote("")
    }   
    return (
        <div>
            {newNote}
            <input
            value={newNote}
            onChange={(e) => setnewNote(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default Form
