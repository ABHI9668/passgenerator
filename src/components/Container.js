import React, { useState } from 'react'
import Options from './Options'
import GenerateButton from './GenerateButton'

const Container = () => {
     const [chars,setchars]=useState();
     const [numbers,setnumbers]=useState(false);
     const [specialchars,setspecialchars]=useState(false);
     const [casing,setcasing]=useState();
  return (
    <div className='container'>
        <h1 className="title">Password Generator</h1>
        <Options setchars={setchars}
                  setnumbers={  setnumbers}
                  setspecialchars={setspecialchars}
                  setcasing={setcasing}


        />
        <GenerateButton chars={chars}
                        numbers={numbers}
                        specialchars={specialchars}
                        casing={casing}
                         />

    </div>
  )
}

export default Container