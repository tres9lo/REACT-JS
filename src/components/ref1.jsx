import {useRef,  useState} from 'react';
function Ref1(){
    const inp1= useRef()
    const btn1 = useRef()
    const [name, setName] = useState()
    const submit = () => {
        setName(inp1.current.value)
    }
    return(
        <div>
            <h1>Ref1</h1>
           Enter Name: <input type="text" ref={inp1}/>
           your name is {name}
            <button onClick={submit}>Get name</button>
            
        </div>
    )
}

export default Ref1;