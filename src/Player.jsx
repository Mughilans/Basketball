import React, { useState } from 'react'
import Select from 'react-select';
import './Player.scss'
import Validation from './Validation';

const Player = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [height, setHeight] = useState("")
    const [position, setPosition] = useState(null)
    const [errors, setErrors] = useState({})
    const [positionList, setPositionList] = useState([
        { label: "Point Guard(PG)", value: "Point Guard(PG)" },
        { label: "Shooting Guard (SG)", value: "Shooting Guard (SG)" },
        { label: "Small Forward (SF)", value: "Small Forward (SF)" },
        { label: "Power Forward (PF)", value: "Power Forward (PF)" },
        { label: "Center (C)", value: "Center (C)" }
    ])

    const handleSelect = (value) => {
        setPosition(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validateData = Validation({ firstName, lastName, height, position })
        setErrors(validateData)
        if (Object.keys(validateData).length > 0) {
            return
        }
        listPosition(position)
        setFirstName("")
        setLastName("")
        setHeight("")
        props.onClick({ firstName, lastName, height, position })

    }

    const listPosition = (position) => {
        const filteredPosition = positionList.filter(item => item.label !== position.label)
        setPositionList(filteredPosition)
        setPosition(null)
    }
    return (
        <div>
            <div className='form-container' >
                <div className="input-container">
                    <input
                        className={errors.firstName ? "form-input form-error" : "form-input"}
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                    <input
                        className={errors.lastName ? "form-input form-error" : "form-input"}
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                    <input
                        className={errors.height ? "form-input form-error" : "form-input"}
                        type='number'
                        name='height'
                        placeholder='Height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    {errors.height && <p className="error">{errors.height}</p>}
                    <Select
                        className={errors.position ? "form-error" : "selects"}
                        value={position}
                        placeholder='Position'
                        onChange={(value) => handleSelect(value)}
                        options={positionList} />
                    {errors.position && <p className="error">{errors.position}</p>}
                    <button className='savebutton' type='submit' onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Player