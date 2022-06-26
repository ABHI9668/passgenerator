import React from 'react'

const Options = (props) => {
  return (
    <div>
        <div>
            <label htmlFor="chars">No. of Characters:</label>
            <input type="number" className="f-right"  id="chars" onKeyUp={(e)=>{props.setchars(e.target.value)}} onClick={(e)=>{props.setchars(e.target.value)}}/>
        </div>

        <div>
            <label htmlFor='includeNumbers'>Include Numbers:</label>
            <input type="checkbox" className="f-right"  id="includeNumbers" onChange={(e)=>{props.setnumbers(e.target.value)}}/>
        </div>

        <div>
            <label htmlFor='specialcharacters'>Include Special Characters:</label>
            <input type="checkbox" className="f-right" id="specialcharacters" onChange={(e)=>{props.setspecialchars(e.target.value)}}/>
        </div>

        <div>
            <label htmlFor="case">Casing:</label>
            <select defaultValue="" className="f-right"  id="case" onChange={(e)=>{props.setcasing(e.target.value)}} >
                <option disabled  value="">select options</option>
                <option value="upper">uppercase</option>
                <option value="lower">lowercase</option>
                <option value="mixed">mixedcase</option>
            </select>
        </div>
    </div>
  )
}

export default Options