import React,{useState} from "react";
import MadlibsForm from "./MadlibsForm";
import MadlibsForm2 from "./MadlibsForm2";

const Madlibs = () => {
    const initialState = {
        noun:"",
        noun2:"",
        adjective:"",
        color:""
    }

    const [formData, setFormData] = useState(initialState);
    const [isEmpty, setIsEmpty] = useState(true)

    const handleSubmit = (values) => { 
        setIsEmpty(false)
        setFormData(values)
    }

    const restart = () =>{
        setFormData(initialState)
        setIsEmpty(true)
    }

    // storyTemplates = [
    //    " There was a {formData.color} {formData.noun} who loved a {formData.adjective} {formData.noun2}",
    //    "I have a {formData.color} {formData.noun} and a {formData.adjective} {formData.noun2}",
    //    "I want a {formData.color} {formData.noun} and a {formData.adjective} {formData.noun2} as birthday gifts"
    // ]

    return (

        !isEmpty && <div>
            {/* <select>
                {storyTemplates.map((t,kdx) => (
                    <option key={idx} value={idx}>
                        {t}
                    </option>
                ))}
            </select>
            <button onClick={() => add}></button> */}

            <p>There was a {formData.color} {formData.noun} who loved a {formData.adjective} {formData.noun2}</p>
            <button onClick={restart}>Restart</button>
        </div>

        ||

        isEmpty && <MadlibsForm2 
        initial={initialState}
        handleSubmit={handleSubmit}
        />  

    )


}

export default Madlibs;

