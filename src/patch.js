import React, {useState} from 'react'
import backendCall from './axios';

function Patchform({note,handleSetNote}) {
    const [content,setcontent] = useState("")
    const [important,setimportant] = useState(true)

    const handlebutton = (id) => {
        const newObj = {
            content: content,
            date: JSON.stringify(new Date()),
            important: true
        }
        console.log(newObj)
        backendCall.update(note.id,newObj).then(e => backendCall.getAll().then(e => handleSetNote(e.data)))
        setcontent("")
    }

    return (
        <div>
            <input
            
            placeholder={note.content}
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            />
            <button onClick={() => handlebutton(note.id)}>Patch</button>
        </div>
    )
}

export default Patchform