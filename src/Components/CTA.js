import React from 'react'
import './cta.css'

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
        <div className='callToAction'>
            <div className="calls">
                <h2>Giving back to the community</h2>
                <h2>Giving back to the planet</h2>
                <h2>Giving value to our collection</h2>
                <h2>Being transparent</h2>
            </div>
        </div>
    )
}

export default CTA