import { useLocation, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import styles from '../css/List.module.css'

export default function List() {
    const location = useLocation()
    const navigate = useNavigate()

    const { inputValue: initialInputValue } = location.state || {};

    const [inputValue, setInputValue] = useState(initialInputValue || '')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (e.target.value.trim()) {
                setInputValue(e.target.value);
                navigate('/List', { state: {inputValue} })

            }
        }
    }

    // To test whenever handleKeyDown is operated, whether a new screen of Lists pops up
    // const [num, setNum] = useState(0)
    // useEffect(() => {
    //     setNum(Math.floor(Math.random() * (20 - 1)) + 1)
    // }, [handleKeyDown])

    return (
        <div className={`${styles.Background} ${styles.Box} `}>
            <div className={`${styles.InputDiv}`}>
                <input 
                    className={`${styles.Input}`}
                    style={{ textAlign: 'center' }}
                    value={inputValue}
                    placeholder={inputValue || 'Find different locations'}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                />
                {/* <p>test random number is: {num}</p> */}
            </div>
        </div>
    )
}