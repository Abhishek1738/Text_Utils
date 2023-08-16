import React ,{useState} from 'react'
  // Declare a new state variable, which we'll call "count"
 

export default function TextForm(props) {
    const handleUpClick=()=>{

        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert(" converted to Upper case", "success")
    }
    const handlLoClick=()=>{

        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" converted to Lower case", "success")
    }
    const handleClear=()=>{

        let newText="";
        setText(newText)
        props.showAlert(" Cleared", "success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    
  return (
    <>
<div className="container" style={{backgroundColor:props.mode=='light'?'white':'blue'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="mybox" >Example textarea</label>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'blue'}}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
</div>
<div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} 34566 characters</p>
    <p>{0.008*text.split(" ").length} read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
</div>
</>
  )
}
