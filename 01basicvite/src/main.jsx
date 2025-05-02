
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';

function MyApp() {
    return (
        <div>
            <h1>Hyy! This is custom app</h1>            
        </div>
    )
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    display: "Click me to visit google.com"
};

const NewReactElement = React.createElement(
    "a",
    { 
        href: "https://www.google.com",
        target: "_blank"
    },
    "Click me to visit google"
);

createRoot(document.getElementById('root')).render(

    // <App />
    // <MyApp />
    // reactElement
    NewReactElement

)
