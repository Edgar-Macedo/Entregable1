
import React, { useState } from 'react';
import Card from "./Card"
import phrases from "../phrases.json"
import Text from './Text';


const QuoteBox = () => {

    const colors = ["red" , "lightblue"  , "lightgreen" , "Lightcoral", "orange","yellowgreen"]

    let randColor = Math.floor(Math.random()*colors.length);
    const [color, setColor] = useState(randColor)
      
    const changeColor = () => {
        let randColor = Math.floor(Math.random()*colors.length);
        let indexColor = parseInt(randColor);
        setColor(indexColor);
        console.log(colors[color])
          
        document.body.style.background = `${colors[color]}`
        document.body.style.color =`${colors[color]}`
        document.getElementById("buttonColor").style.background = `${colors[color]}`
      
        console.log(document.body.style)
        
    }

    
      
    let randNunb = Math.floor(Math.random()*phrases.length);
    const [index, setIndex] = useState(randNunb);

    const changeQuote = () => {
        let randNunb = Math.floor(Math.random()*phrases.length);
        let indexNumber = parseInt(randNunb);
        setIndex(indexNumber)
    }

    const handlerOnClick = () => {
        changeColor();
        changeQuote();
    }

    return (
        <Card>
            <div>
                <h2><i className="fas fa-quote-left"></i></h2>
                <Text text={phrases[index].quote}/>
            </div>
            <Text text={phrases[index].author} id="author"/>
            <button onClick= {handlerOnClick} className='nextRandQuote' id='buttonColor'>  <i class="fas fa-greater-than"></i> </button>
        </Card>
    );
};

export default QuoteBox; 