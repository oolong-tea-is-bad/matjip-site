import { useLocation, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import styles from '../css/List.module.css'

import { restaurants } from "../data/data.js";


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

    const listRestaurants = restaurants.map(restaurant =>
        <div className={`${styles.Box} ${styles.Lists}`}>
            <div className={`${styles.ImageDiv}`}>
                <p>Image</p>
            </div>

            <p>Name: {restaurant.name}</p>
            <p>Category: {restaurant.category}</p>
            <p>Rating: {restaurant.rating}</p>
        </div>
    )

    return (
        <div className={styles.Background}>
            <div className={`${styles.InputDiv}`}>
                <input 
                    className={`${styles.Input}`}
                    style={{ textAlign: 'center' }}
                    value={inputValue}
                    placeholder={inputValue || 'Find different locations'}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                />
            </div>

            <div className={`${styles.ListsDiv}`}>
                {listRestaurants}
            </div>
        </div>
    )
}