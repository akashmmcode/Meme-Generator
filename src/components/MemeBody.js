import React from "react";
// import memeData from "../memeData";


function MemeBody() {

    const [meme, setMeme] = React.useState(
        {firstword: "", secondword: "",randomimage:""}
    );

    const [memeimage,setrandomimage] = React.useState("");


    function memeClick(){
        const memelist = memeimage.data.memes;
        const randomcount = Math.floor(Math.random() * memelist.length);
        const memeURL = memelist[randomcount].url;
        setMeme((x)=>{
            return {
                ...x,
                randomimage:memeURL
            }
        })
    }
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setrandomimage(data))
    },[])
    
   
    function toggle(event){
        setMeme((x)=>{
            return{
                ...x,
                [event.target.name]:event.target.value
            }
        })
    }


    return (
        <div>
            <form className="memeform">
                <input type="text" placeholder="First word" name="firstword" onChange={toggle} value={meme.firstword}/>
                <input type="text" placeholder="Second word" name="secondword" onChange={toggle} value={meme.secondword}/>


                <button className="memebutton" type="button" onClick={memeClick} >Click
                </button>


            </form>
            <div className="meme">
                <img className="memeImage" src={meme.randomimage} alt="ffe" name="randomimage" />
                <h2 className="meme--text top" id="up">{meme.firstword}</h2>
                <h2 className="meme--text bottom" id="down">{meme.secondword}</h2>
            </div>
        </div>
    )
}

export default MemeBody