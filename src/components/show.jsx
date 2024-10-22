import React, { useState } from 'react'

function ShowHide() {
    const [obj, setObj] = useState({ typ: "password", btntext: "Show" })
    
    const change = () => {
        if (obj.typ === "text") {
            setObj({ ...obj, typ: "password", btntext: "Show" })
        } else {
            setObj({ ...obj, typ: "text", btntext: "Hide" })
        }
    }
    
    return (
        <div>
            Enter your password <input type={obj.typ} />
            <button onClick={change}>{obj.btntext}</button>
        </div>
    );
}

export default ShowHide;
