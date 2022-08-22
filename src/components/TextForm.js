import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleclick = () => {

    //console.log("Uppercase was clicked " + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleloclick = () => {

    //console.log("Uppercase was clicked " + text)
    let newText = text.toLowerCase();
    setText(newText)
  }

 

  const handlechange = (event) => {
    console.log("On change")
    setText(event.target.value)

  }


  const cleartext = () => {
    let newText='';
    setText(newText)

  }

  const copytext = () => {
    if(text.length>0){
    let settext=document.getElementById("mybox");
    settext.select();
    navigator.clipboard.writeText(settext.value);
    }
    else{
      alert("No text to copy ");

    }

  }



  return (
    <>
      <div className="container" style={{ color:props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={text} onChange={handlechange} style={{ backgroundColor:props.mode==='dark'?'grey':'white',
       color: props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary my-3  "
          onClick={handleclick} >Convert to uppercase</button>
        <button className="btn btn-primary my-3 mx-2"
          onClick={handleloclick} >Convert to lowercase</button>
         <button className="btn btn-primary my-3 mx-2"
          onClick={cleartext} >Clear Text</button>      
          <button className="btn btn-primary my-3 mx-2"
          onClick={copytext} >Copy Text</button>    
      </div>
      <div className="container my-2" style={{ color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length } Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>

      </div>
    </>
  )
}



