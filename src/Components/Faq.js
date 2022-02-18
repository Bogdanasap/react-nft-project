import React from 'react'
import "./faq.css"
const accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle("active");
    })
})

const Faq = () => {
    return (
        <div className='faq'>
            <h2>FAQ</h2>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <div className='accordion'>

                <div className='accordion-item'>
                    <div className='accordion-item-header'>
                        What is an NFT?
                    </div>
                    <div className='accordion-item-body'>
                        <div className='accordion-item-body-content'>
                            LMAO just screenshot one.
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className='accordion-item-header'>
                        How many are there?
                    </div>
                    <div className='accordion-item-body'>
                        <div className='accordion-item-body-content'>
                            Just STFu and buy one or 15.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq
