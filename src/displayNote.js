import React from 'react'
import backendCall from './axios';
import Patchform from './patch';
function DisplayNote({note,handleSetNote}) {

    const handleDelete = (id) => {
        backendCall.deleteSingle(id).then(e =>  backendCall.getAll().then(e => handleSetNote(e.data)))
        console.log('deleted')
       
    }



    return (
        <div>
            <div>{note.content}
            <button onClick={() => handleDelete(note.id)}>delete</button>
            </div>
            <Patchform note={note} handleSetNote={handleSetNote}/>
            {/* <div>{note.important}</div> */}
        </div>
    )
}

export default DisplayNote
