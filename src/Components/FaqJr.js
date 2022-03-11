import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {Accordion, Button, Form} from "react-bootstrap";
import "./FaqJr.css";



export default function App() {

    return (
        <div>
            <Accordion className='accordion item' flush >
                <Accordion.Item eventKey="0" className='faq' bsPrefix="bs">
                    <Accordion.Header >
                        <p >Accordion Item #1</p>
                        </Accordion.Header>
                    <Accordion.Body flush className='contents transparent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='accordion item' flush >
                <Accordion.Item eventKey="1" className='faq'>
                    <Accordion.Header className='title'>Accordion Item #2</Accordion.Header>
                    <Accordion.Body className='contents transparent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}