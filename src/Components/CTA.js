import React from 'react'
import './cta.css'
import './CTA.scss'

const CTA = () => {
    return (
        <div className='call-to-action cont'>
            <article>
                <button className="button-call">
                <h3>Text1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam</p>
                </button>

            </article>
            <article>
                <h3>Text2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam</p>
            </article>
            <article>
                <h3>Text3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam</p>
            </article>
        </div>
    )
}

export default CTA