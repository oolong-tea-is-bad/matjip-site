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
      if (inputValue.trim()) {
          navigate('./List', { state: {inputValue} })
      }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (e.target.value) {
                if (e.target.value.trim()) {
                    setInputValue(e.target.value);
                    navigate('./List', { state: {inputValue} })
                }
            }
        }
    }

    return (
        <div className={styles.Background}>
            <text className={`${styles.myH1}`}>
                What Area Would You
                <br />
                Like to Search?
            </text>
            <div className={`${styles.InputDiv}`}>
                <input
                    className={styles.InputField} 
                    placeholder='e.g. 성수동'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div>
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