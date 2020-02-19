import React, {useState} from 'react';

import Input from './Components/Input' 
import Prompter from './Components/Prompter'
import Result from './Components/Result'

import './App.css';


function App() {
  const [submit, setSubmit] = useState(false)
  const [writing, setWriting] = useState('')
  return (
    <div className="App">
      {!submit ? 
      <div>
      <Prompter />
      <Input submit={submit}setSubmit={setSubmit} setWriting={setWriting} writing={writing}/>
      </div>
      :
      <Result submit={submit}setSubmit={setSubmit} setWriting={setWriting } writing={writing} />
      }

    </div>
  );
}

export default App;
