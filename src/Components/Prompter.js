import React, {useState} from 'react'
import prompts from '../prompts'

function Prompter() {
    const [prompt, setPrompt] = useState('Click to generate a prompt. Or just write away!')

    let rando = () => {
        setPrompt(prompts[Math.floor(Math.random() * prompts.length)])
    }

    return (
        <div className='prompt'>
        <h1>{prompt}</h1>   
        <br/>
        <button className='button' onClick={()=> rando()}>
            New Prompt!
        </button>
        </div>
    )
}

export default Prompter
