import React from 'react'

function Input({submit,setSubmit, setWriting, writing}) {
    let handleSubmit = () => {
        setWriting(writing)
        setSubmit(!submit)
    }
    return (
        <div className='input'>
            <form>
                <textarea 
                className='writingPad'
                value={writing}
                onChange={(e) => setWriting(e.target.value)}
                />
                <br/>
                <div className='input-btn'>
                <button className='button' onClick={()=> handleSubmit()}>
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default Input
