import React from 'react'
import "./faq.css"
const faqItem = document.querySelectorAll(".accordion-item-header");
faqItem.forEach(faqItem => {
    faqItem.addEventListener('click',event => {
        faqItem.classList.toggle('active');
    })
})

const Faq = () => {
    return (
        <div className='faq'>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <h1>FAQ</h1>
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
                        How many NFTs will be minted?
                    </div>
                    <div className='accordion-item-body'>
                        <div className='accordion-item-body-content'>
                            10k just give us the money already.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq
