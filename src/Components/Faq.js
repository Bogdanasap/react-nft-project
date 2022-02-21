import React from 'react'
import "./faq.css"
import {useState} from 'react'
import * as events from "events";


const Faq = () => {

    const[selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='accordion'>
            <div className='faq'>
                <h1>FAQ</h1>
            </div>
           <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className='contents'>
                            <div className={selected == i ? 'content.show' : 'content'}>{item.answer}</div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

const data = [
    {
        question: 'What is an NFT?',
        answer:
            'LMAO just screenshot one',
    },
    {
        question: 'How many are there?',
        answer:
            '10K boiiii',
    }
]

export default Faq

