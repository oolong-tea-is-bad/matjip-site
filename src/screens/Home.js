import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../css/Home.module.css'

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSearch = () => {
      navigate('./List', { state: {inputValue} })
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (e.target.value.trim()) {
                setInputValue(e.target.value);
                navigate('./List', { state: {inputValue} })
            }
        }
    }

    return (
        <div className={`${styles.Background} ${styles.Box}`}>
            <text className={`${styles.myH1} ${styles.Box}`}>
                What Area Would You Like to Search?
            </text>
            <div className={`${styles.InputDiv}`}>
                <input 
                    className={`${styles.Input}`} 
                    placeholder='e.g. 성수동'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className={`${styles.SearchDiv}`}>
                <button 
                    className={`${styles.SearchButton}`}
                    onClick={handleSearch}
                >
                    Search!
                </button>
            </div>
        </div>
    )
}