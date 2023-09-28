import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("upper case was clicked: "+ text)
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success');
    }

    const handleLoClick=()=>{
        // console.log("upper case was clicked: "+ text)
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', 'success');

    }

    const handleClearClick=()=>{
        // console.log("upper case was clicked: "+ text)
        let newText= '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');

    }

    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied', 'success');

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces', 'success');
    }

    const handleCapitalize=()=>{
        let c= text.split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(c);
        props.showAlert('Capitalized', 'success');
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText]=useState('');
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#030625'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='dark'?'#030625':'white', color: props.mode==='dark'?'white':'black'}}onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#030625'}} >
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.split(" ").length: '0'} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text in the above box to get a preview"}</p>
        </div>
    </>
  )
}
