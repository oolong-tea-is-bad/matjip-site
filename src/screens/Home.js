import './Home.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => {
      navigate('./List', { state: {inputValue} })
    };

    return (
        <div className="Background Box">
            <text className='Box myH1'> What Area Would You Like to Search? </text>
            <div className='InputDiv'>
                <input 
                    className='Input' 
                    placeholder='e.g. 성수동'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className='SearchDiv'>
                <button 
                    className='SearchButton'
                    onClick={handleButtonClick}
                >
                    Search!
                </button>
            </div>
        </div>
    )
}