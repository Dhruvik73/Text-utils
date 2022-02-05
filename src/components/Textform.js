import React ,{useState} from 'react';


export default function Textform(props){
    const copy=()=>{
        var text=document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.show('All text copied Successfully','success')
    }
    
    const capital=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        if(text===''){
            props.show('Please enter some text','warning')
        }
        else{
        props.show('capitalize successfully','success')}
    }
    const handler=(event)=>{
        setText(event.target.value)
    }
    const remove=()=>{
        setText('')
        if(text===''){
            props.show('Please enter some text','warning')
        }
        else{
        props.show('All text removed','success')
        }
    }
     const space=()=>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(' '))
        if(text===''){
            props.show('Please enter some text','warning')
        }
        else{
        props.show('Extra space has been removed','success')}
    }
    const firstcap=()=>{
        let alltext=text.toLowerCase();
        alltext=alltext.split(' ')
        let i=0
        for(i=0;i<alltext.length; i++){
          alltext[i]=alltext[i].charAt(0).toUpperCase()+alltext[i].slice(1);
        }
        alltext=alltext.join(' ')
        setText(alltext)
        if(text===''){
            props.show('Please enter some text','warning')
        }
        else{
        props.show('All Words First Characters Is now Capital','success')}
        
    }
    const [text,setText]=useState('')
    return(
        <>
<div className="mb-3">
    <h4>{props.head}</h4>
  <textarea className="form-control" value={text} onChange={handler} id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'rgb(71 124 203)':'gray',color:props.mode==='light'?'white':'black'}}></textarea>
  </div>
  <div>
  <button className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-2`} onClick={capital}>Convert to Capital</button> <button className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-2`} onClick={remove}>Clear Text</button>
  <button className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-2`} onClick={copy}>Copy to Clipboard</button>
  <button className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-2`} onClick={space}>Remove Extra Space</button> 
  <button className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-2`} onClick={firstcap}>Convert All Words First Character Capital </button>
</div>
<div className='container my-3'>
    <h2> your word counter</h2>
    <p>number of words is {text.split(" ").length-1} and number of characters is {text.length}</p>
    <p>you need {0.008 * (text.split(" ").length-1)} minutes to read this above text</p>
    <h3>preview</h3>
    <p>{text===''?'enter some text to view the preview':text}</p>
</div>
</>
    )
    }
