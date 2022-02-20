import React from 'react'
import "./faq.css"
import * as events from "events";


const Faq = () => {
    return (
        <div className='faq'>
           <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <body>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <section>
                    <div className="container">
                        <div className='accordion'>
                            <div className="accordion-item" id="question1">
                                <a href="question1" className='accordion-link'>
                                    What is an NFT?
                                    <ion-icon name="add-outline"></ion-icon>
                                    <ion-icon name="remove-outline"></ion-icon>
                                </a>
                                <div className="answer">
                                  <p>
                                      LMAO just screenshot one.
                                  </p>
                                </div>
                            </div>

                            <div className="accordion-item" id='question2'>
                                <a href="question 2" className='accordion-link'>
                                    How many are there?
                                    <ion-icon name="add-outline"></ion-icon>
                                    <ion-icon name="remove-outline"></ion-icon>
                                </a>
                                <div className="answer">
                                    <p>
                                        10k 400 each boiii.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </body>
        </div>
    )
}

export default Faq
