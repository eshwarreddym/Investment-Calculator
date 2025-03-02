import Header from "./components/header/header.component.jsx";
import UserInput from "./components/UserInput/userInput.component.jsx";
import Results from "./components/results/results.component.jsx";
import {useState} from "react";

function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  });

  const inputIsvalid = userInput.duration >=1;

  function handleChange(inputIdentifier,newValue) {
    setUserInput((prevUserInput)=>{
      return{
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }


  return (
      <>
          <Header/>
          <UserInput userInput={userInput} onChange={handleChange} />
          {!inputIsvalid && <p className='center'>Please enter duration greater than zero</p>}
          {inputIsvalid && < Results input={userInput}/>}
      </>
  )
}

export default App
