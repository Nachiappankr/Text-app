import React,{useState} from 'react'

export default function TextForm(props) {
  const handleuppercase= ()=>{
    console.log("upper case clicked")
    let newText=text.toUpperCase();
    setText(newText)
    props.showalert("Text changed to uppercase","Success")
  }
  const handlelowercase= ()=>{
    console.log("upper case clicked")
    let newText=text.toLowerCase();
    setText(newText)
    props.showalert("Text changed to lowercase","Success")
  }
  const handletextclear=()=>{
    setText("")
    props.showalert("Text cleared","Success")
  }
  const handleonchange=(event)=>{
    setText(event.target.value)

  }
  const [text,setText]=useState("Enter text here");
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">{props.textareatitle}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="5"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleuppercase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelowercase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handletextclear}>Clear</button>
        <div className='container my-3'>
          <h4>Your text summary</h4>
          <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className='container my-3'>
          <h3>Previrew</h3>
          <p>{text.length==0?"Enter something to preview here":text}</p>
        </div>
    </div>
  )
}
