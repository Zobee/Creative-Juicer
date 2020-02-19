import React from 'react'

function Result({writing, setWriting, submit, setSubmit}) {
    let handleReset = () => {
        setWriting('')
        setSubmit(!submit)
    }

    return (
        <div>

        <div className='paper'>
        <div className='pattern'>
            <div className='content'>
            {writing}  
            </div>
        </div>
        </div>
            <br/>
            <div className='input-btn'>
            <button className='button' onClick={()=>{handleReset()}}>
                Another!
            </button>
            </div>

        </div>
    )
}

export default Result
