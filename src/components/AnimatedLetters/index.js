import './index.scss'
import React from 'react';

const AnimatedLetters = ({letterClass ,strArray,idx}) => {

    return(
        <span>
            {strArray.map((ch,i) => <span key={i + ch} className={`${letterClass} _${i + idx}`}>{ch}</span>)
            }
      
        </span>
    )
    
}

export default AnimatedLetters;