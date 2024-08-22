import React,{useState} from 'react'
import "./MadlibsForm.css"

const  MadlibsForm = ({formData, setFormData, handleSubmit}) => {


    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            id="noun"
            type="text"
            name="noun"
            placeholder="noun"
            value={formData.noun}
            onChange={handleChange}
            />

            <input
            id="noun2"
            type="text"
            name="noun2"
            placeholder="noun2"
            value={formData.noun2}
            onChange={handleChange}
            />

            <input
            id="adjective"
            type="text"
            name="adjective"
            placeholder="adjective"
            value={formData.adjective}
            onChange={handleChange}
            />
            
            <input
            id="color"
            type="text"
            name="color"
            placeholder="color"
            value={formData.color}
            onChange={handleChange}
            />
            {/* {<span style={{color:"red"}}>color is require!</span>} */}

            <button>Get Story</button>
        </form>
    )
}

export default MadlibsForm;