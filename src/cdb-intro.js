import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import BrowserRouter from 'react-router-dom';
import Navigation from './components/navigation/Navigation.js';

ReactDOM.render(
    <BrowserRouter>
    <BrowserRouter path="" component={Home} />
    <BrowserRouter path="./cdb-intro.html" component={Intro} />
    </BrowserRouter>
//   <React.StrictMode>
//     <Navigation/>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('cdb-intro')
);

const Home = () => {
    return (
        <Navigation/>
    )
}

const Intro = () => {
    return (
        document.getElementById('cdb-intro')
    )
}
