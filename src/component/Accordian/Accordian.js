import React, { useState } from 'react'
import {questions}from './api';
import "./acordian.css";
import MyAccordion from './MyAccordian';
const Accordian=()=>{
    const [data, setData]=useState(questions);

    return(
        <>
        <section className='main-div'>
        <h1>React Interview Questions</h1>
            {
                data.map((curElem)=>{
                    const {id}=curElem;
                    return <MyAccordion key={id} {...curElem}/>

                })
            }
            </section>
        </>
    )
}
export default Accordian;