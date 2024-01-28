/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import data from './qusions'
function Q() {
    const [qno,setqno]=useState(0)
    return(
        <div className="que">
            <h1>Question</h1>
            <p className="qu">{qno+1} of {data.length}</p>

            <h3>{data[qno].question}</h3>
            <div className="ops">
                <button className="op">{data[qno].optionA}</button>
                <button className="op">{data[qno].optionB}</button>
                <button className="op">{data[qno].optionC}</button>
                <button className="op">{data[qno].optionD}</button>
            </div>
            <div className="controls">
            <button className="red" onClick={()=>{setqno(qno==0 ? data.length-1 : qno-1)}}>Prev</button>
            <button className="green" onClick={()=>{setqno(qno==data.length-1 ? 0 : qno+1)}}>Next</button>
            <button className="red" onClick={()=>{alert("Want to leave?")}}>End</button>
            </div>
        </div>
    )
}
export default Q;