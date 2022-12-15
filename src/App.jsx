import { useState } from "react"
import Nav from "./components/Nav"
import Personal from "./components/Personal"
import PickAddOns from "./components/PickAddOns";
import SelectPlan from "./components/SelectPlan";
import Summry from "./components/Summry";
import ThankYou from "./components/ThankYou";
function App(props) {

  const [step , setStep] = useState(1);
  const [plan , setPlan] =useState({});
  const [addOns , setAddOns] = useState({});



  
  return (
    <div className="lg:w-[1024px] w-full md:h-[80vh] bg-white flex rounded-2xl md:px-5 md:py-5 flex-col md:flex-row h-full ">
      <Nav step={step} setStep={setStep}/>
      {step === 1 
        ? (<Personal setStep={setStep}/> )
        : (
            step === 2 
            ? <SelectPlan setStep={setStep} setPlan={setPlan}/> 
            : 
              (step === 3 
              ? <PickAddOns setStep={setStep} plan={plan} setAddOns={setAddOns}/>
              : step === 4 ? <Summry plan={plan} addOns={addOns} setStep={setStep}/> : <ThankYou />
              )
          ) 
        
      
      }

    </div>
  )
}

export default App
