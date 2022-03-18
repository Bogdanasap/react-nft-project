import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {Accordion, Button, Form} from "react-bootstrap";
import "./FaqJr.css";



function FaqJr() {

    return (
            <div className="container">
                <div className='faq'>
                    <h1>FAQ</h1>
                </div>
            <Accordion className='accordion1 item' flush >
                <Accordion.Item eventKey="0" className='faqjr' bsPrefix="bs">
                    <Accordion.Header className='titlejr'>
                        <p>Accordion Item #1</p>
                        </Accordion.Header>
                    <Accordion.Body flush className='contents transparent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='accordion1 item' flush >
                <Accordion.Item eventKey="1" className='faqjr'>
                    <Accordion.Header className='titlejr'>Accordion Item #2</Accordion.Header>
                    <Accordion.Body className='contents transparent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
} export default FaqJr;