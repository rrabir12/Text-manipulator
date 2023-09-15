import React,{useState} from "react";

const TextForm=(props)=>{
    const [text, setText]=useState('');
   
    const handletext=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const lowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    
    const cleartext=()=>{
        setText("");
    }

    const Replacespace=()=>{
       let rep=text.replace(/\s+/g,'');
        setText(rep);
    }

    const copytext = () => {
        let alltext=document.getElementById("Box");
        alltext.select();
        navigator.clipboard.writeText(alltext.value);
        }

        const selecttext = () => {
            let alltext=document.getElementById("Box");
            alltext.select();
            }

    const changetext=(event)=>{
        setText(event.target.value);
    }

return (
    <>
        <div className="mb-3">
            <h2>{props.heading}</h2>
  <label for="Box" className="form-label"></label>
  <textarea className="form-control" id="Box" value={text} onChange={changetext} rows="10"></textarea>
  <button className="btn btn-primary my-3" onClick={handletext}>Uppercase</button>
  <button className="btn btn-primary my-3 m-2" onClick={lowercase}>Lowercase</button>
  <button className="btn btn-primary my-3 m-2" onClick={cleartext}>Clear Text</button>
  <button className="btn btn-primary my-3 m-2" onClick={Replacespace}>Replace Whitespace</button>
  <button className="btn btn-primary my-3 m-2" onClick={copytext}>Copy Text</button>
  <button className="btn btn-primary my-3 m-2" onClick={selecttext}>Select Text</button>
</div>

<div className="container my-3" >
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
    );
}
export default TextForm; 