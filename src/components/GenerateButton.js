import React, { useState } from 'react'

const GenerateButton = (props) => {
    const[pass,setpassword]=useState("");

    const generatePassword = () => {
    let chars=""
    switch(props.casing){
        case "lower":
        chars="abcdefghijklmnopqrstuvwxyz"
        break;

        case "upper":
        chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;

        case "mixed":
        chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;

        default:
        chars="abcdefghijklmnopqrstuvwxyz"
        break;
    }

    if(props.numbers){
        chars=chars+"123456789";
    }
    if(props.specialchars){
        chars=chars + "!@#$%^&*_";
    }
    let charCount = props.chars;
    if(charCount > 12) { charCount = 12; }

    if(charCount < 1)  { charCount = 1;  }
       
    let password=""
     for(let i=0;i<charCount;i++){
         const index=Math.floor(Math.random()*chars.length)
         const single=chars.charAt(index);
         password=password+single;
     }
     setpassword(password)
    }
  return (
     
    <div>
        
       <button className="action_btn" onClick={generatePassword}>Generate Password</button>
      {
          pass!==0?<h2 className="op_pass">{pass}</h2>:false
      }
       </div>
   

  )
}

export default GenerateButton