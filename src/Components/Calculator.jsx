import React, {useState,useRef} from 'react';
import './Calculator.css';

function Calculator()
{
/* For weight */
const wkg=useRef(null);
const wlb=useRef(null);
const weight=useRef(null);
const [convertone, setConvertone]=useState(null);

const convertlbs=()=>{

    setConvertone(wkg.current.value*2);
     }

const convertkg=()=>{
   
    setConvertone(wlb.current.value/2);
        }

        const clearone=()=>{
            wkg.current.value=null;
            wlb.current.value=null;
            weight.current.value=null;
        }
/* for height*/
const height=useRef(null);
const hf=useRef(null);
const hcm=useRef(null);
const [converttwo, setConverttwo]=useState(null);

const convertcm=()=>{

    setConverttwo(hf.current.value*30.48);
}
const convertfeet=()=>{
    setConverttwo(hcm.current.value/30.48);
}
const cleartwo=()=>{
    hf.current.value=null;
    hcm.current.value=null;
    height.current.value=null;
}
/*for age */
const age=useRef(null);
const clearthree=()=>{
    age.current.value=null;
}

/* For calorie calculation */
const[formdata, setFormdata]=useState({
    isAgree:false,
    gender:""
});

const handleChange=e=>{

const value=e.target.value;

setFormdata(value);

}

const totcal=useRef(null);
const cal=useRef(null);
const [caloriesfood,setCaloriesfood]=useState(null);

const caloriecalc=()=>{

    const w=parseFloat(wkg.current.value);
  const h=parseFloat(height.current.value);
    const  a=parseFloat(age.current.value);
    if(cal.current.value=="male")
    {
    setCaloriesfood(10*w+6.25*h-5*a+5);
    }
    else if(cal.current.value=="female")
    {
        setCaloriesfood(10*w+6.25*h-5*a-161);
    }

}



const option=[
    {
        value:"Weight Gain",
        label:"Weight Gain",
    },
    {
        value:"Fat Loss",
        label:"Fat Loss",
    },
    {
        value:"Maintenance",
        label:"Maintenance",
    },
]

const calorie=useRef(null);
const [caloriechoose, setCaloriechoose]=useState(null);

const tcalorie=useRef(null);
const [totcalorie, setTotcalorie]=useState(null);

const calculate=()=>{
    if(calorie.current.value=="Weight Gain")
    {
        setTotcalorie(parseFloat(totcal.current.value)+500);
    }
    else if(calorie.current.value=="Fat Loss")
    {
        setTotcalorie(parseFloat(totcal.current.value)-500);
    }
    else if(calorie.current.value=="Maintenance")
    {
        setTotcalorie(totcal.current.value);
    }
}


const clearfour=()=>{
calorie.current.value=null;
tcalorie.current.value=null;
totcal.current.value=null;
}


    return (
    <>
<div className="main">
    <div className="caltitle">
        <p><font size="20" color="pink"><b>Please Put In Details</b></font></p>
        </div>
        <div className="main-form-one">
            <div className="division-one">
                <div className="w">
         <h2>Enter Your Weight:</h2>
         <input type="text" placeholder="in Kg" ref={wkg} /><br/><br/>
         <input type="text" placeholder="in lbs" ref={wlb} /> <br/><br/>
         <h2>Converted Value:</h2>
         <input type="text" ref={weight} value={convertone}/><br/><br/>
         <div className="weight-btn">
         <button id="kg" onClick={()=>convertlbs()}>convert from kg to lbs</button> <button id="lbs" onClick={()=>convertkg()}>convert from lbs to kg</button>
        <button id="weight-clear" onClick={()=>clearone()}>Clear All</button> 
        </div>
        </div>
        <div className="h">
        <h2>Enter Your Height:</h2>
        <input type="text" placeholder="in feet and inches for ex:- 6 feet 1 inch =6.1" ref={hf}  /><br/><br/>
         <input type="text" placeholder="in cm" ref={hcm} /> <br/><br/>
         <h2>Converted Value:</h2>
         <input type="text" ref={height} value={converttwo} /><br/><br/>
         <div className="height-btn">
         <button id="feet" onClick={()=>convertcm()}>convert from feet to cm</button> <button id="cm" onClick={()=>convertfeet()} >convert from cm to feet</button>
        <button id="height-clear" onClick={()=>cleartwo()}>Clear All</button> 
             </div>


         </div>
       
</div>

   <div className="division-two">
<h2>Enter Your Age:</h2>
<input type="text" ref={age} /><br/><br/>
<button id="age-clear" onClick={()=>clearthree()}>Clear All</button>
</div>

            </div>

<div className="main-form-two">
<p><font size="20" color="pink"><b>Calorie Calculator</b></font></p>
<div className="division-three">
    <h2>Select Gender:</h2><br/>
    
    <label><font color="white"><i>Male</i></font></label>
    <input type="radio" name="gender" value="male" onChange={handleChange}/>
    <label><font color="white"><i>Female</i></font></label>
    <input type="radio" name="gender" value="female" onChange={handleChange}/><br/>
  <div className="gd">
   <input type="text" id="genderdisplay" ref={cal} value={formdata}/><br/><br/>
    </div>
    <label><font color="yellow"><i>Calories</i></font></label>
    <input type="text" ref={totcal} value={caloriesfood}/>
    <br/><br/>
    <button id="calorie-btn" onClick={()=>caloriecalc()} >Calculate</button><br/><br/>
    
   
    <select onChange={(e)=>{
        const choose=e.target.value;
      setCaloriechoose(choose);
    }}>
        {option.map((option)=>(
            <option value={option.value}>{option.label}</option>
        ))}
        </select><br/><br/>
        <input type="text" id="gender-selection" ref={calorie} value={caloriechoose}/><br/><br/>
        <label><font color="yellow"><i>Total Calories</i></font></label>
        <input type="text" ref={tcalorie} value={totcalorie}/><br/><br/>
        <div className="btn-arrangement">
        <button id="btn-tot" onClick={()=>calculate()}>Calculate</button>

        <button id="gender-clear" onClick={()=>clearfour()}>Clear All</button>
    </div>

    </div>
    </div>

     </div>
    </>

    );

}

export default Calculator;

