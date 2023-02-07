import React, { useState } from 'react'

export default function form(props) {
  const [text,setText]=useState("");
  console.log(text.length);
  const [btntxt,setbtntxt]=useState("change to uppercase");
  const handlecase= ()=>{
    if(btntxt==="change to uppercase")
    {
    const newtext=text.toUpperCase();
    setText(newtext);
    {
      if(text.length!==0)
      {
        props.showalert('text has been changed to uppercase','success');
      }
      else{
        props.showalert('nothing here to make change','warning')
      }
    }
    setbtntxt("change to lowercase");
    }
    else{
    const newtext=text.toLowerCase();
    setText(newtext);
    {
      if(text.length!==0)
      {
        props.showalert('text has been changed to lowercase','success');
      }
      else{
        props.showalert('nothing here to make change','warning')
      }
    }
    setbtntxt("change to uppercase");
    }
  }
  
  const handleCleartext= ()=>{
    
    {
      if(text.length!==0)
      {
        props.showalert('text has been cleared','success');
      }
      else{
        props.showalert('already cleared','success')
      }
    }
    const newtext='';
    setText(newtext);
  }
  const handleOnchange= (event)=>{
  setText(event.target.value);
  }
  
 let countword;
 countword=text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
  
 const handlecopy=()=>{
  var txt=document.getElementById("myBox");
  txt.select();
  navigator.clipboard.writeText(txt.value);
  // {props.showalert('text has been copied to clipboard','success')?text.length!==null:props.showalert('nothing to copy write someshing in textbox','success')};
  {
    if(text.length!==0)
    {
      props.showalert('text has been copied to clipboard','success');
    }
    else{
      props.showalert('nothing here to copy write something in textbox','warning')
    }
  }
}
 const removespace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  {
    if(text.length!==0)
    {
      props.showalert('extra space has been removed','success');
    }
    else{
      props.showalert('nothing here to make change','warning')
    }
  }
 }


  return (
  
    <div>
      
      <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h3>
      <div className="mb-3">        
        <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
        
      </div>
      <button className="btn mx-1 my-1" style={{background:"blue", color:"white"}} onClick={handlecase}>{btntxt}</button>
      <button className="btn mx-1 my-1" style={{background:"blue", color:"white"}} onClick={handleCleartext}>clear text</button>
      <button className="btn mx-1 my-1" style={{background:"blue", color:"white"}}onClick={handlecopy}>copy text</button>
      <button className="btn mx-1 my-1" style={{background:"blue", color:"white"}}onClick={removespace}>remove extra space</button>
    <div className="my-5">
      <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>word count</h3>
      <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{countword} words {text.length} characters</p>
    </div>
    </div>
  )
}