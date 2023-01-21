import React, {useState} from 'react'


export default function TextForm(props) {


  const handleUpClick=()=>{
    // console.log("UpperCase Button was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);

  }

  const handleLoClick=()=>{
    // console.log("UpperCase Button was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);

  }

  const handleClear=()=>{
    // console.log("UpperCase Button was clicked" + text);
    let newText="";
    setText(newText);

  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  let [text,setText] = useState("");
  // text="new Text";  //Wrong way to change the state 
  // setText("new Text"); //Correct way to change the state

  let timeer=0;
  if (text.length>=1){
    timeer=0.008*(text.split(" ").length);
  }

  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} placeholder="Enter Your Text Here" id="myBox" rows="8"></textarea>
        </div>
    <div className="btn container">
    <button className="btn btn-primary" onClick={handleUpClick} style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd'}}>Convert to Upercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick} style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd'}}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClear} style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd'}}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy} style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd'}}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleExtraSpace} style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd'}}>Remove Extra Space</button>
    </div>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
      <p>Your Reading Time: {timeer} Mins</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Your Text in Text Box"}</p>
    </div>
    </>
  )
}
