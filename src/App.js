import logo from './logo.svg';
import './App.css';
import backendCall from './axios';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNote from './displayNote';
import Form from './form';
function App() {
  const [notes,setNote] = useState([])
  const [single,setSingle] = useState("")
  const [singleOut,setSingleout] = useState({})

  useEffect(()=>{
    backendCall.getAll().then(e => setNote(e.data))
  },[])

  const handleSetNote = (array) => {
    setNote(array)
  }
  const handleSingle = (e) => {
      setSingle(e.target.value)
  }
//press button to search
  const handbutton = () => {
    backendCall.getSingle(single).then(e => setSingleout(e.data))
  }

  console.log(single)

  return (
    <div className="App">
      {
        notes.map(e => {
          return(
            <div key={e.id}>
              <div> <DisplayNote note={e} handleSetNote={handleSetNote}/></div>
            </div>
          )
        })
      }
      <div><Form  handleSetNote={handleSetNote}/></div>
      <div>
        <input
        value={single}
        onChange={handleSingle}
        
        />
      <button onClick={handbutton}>Search</button>

      </div>
      <div>{singleOut.content}</div>
    </div>
  );
}

export default App;
