import React, { useState } from 'react';
import example from './data/example.json';

const App = () => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = example.filter((item) => {
                const regex = new RegExp(`^${text}`, 'gi')
                return item.name.match(regex);
            })
        }
        setTimeout(() => {
            setSuggestions(matches);
        }, 700);
        setText(text);
    };

    const suggestionHandler = (text) => {
        setText(text);
        setSuggestions([]);
    };

    return (
        <div className="App">
            <input className="input" type="text" value={text} onChange={(e) => handler(e.target.value)} onBlur={() => {
                setTimeout(() => {
                    setSuggestions([])
                }, 100);
            }} />
            {suggestions?.map((item, index) => {
                return (
                    <div key={index} className="suggestion" onClick={() => suggestionHandler(item.name)}>{item.name}</div>
                )
            })}
        </div >
    )
};
export default App;