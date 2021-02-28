import React from 'react'
import Navigation from '../navigation/Navigation';
import sem8 from './sem8.json';

function Reflexion(semaine) {
    if ({semaine} == "sem8") {
        return (
            <div>
                <Navigation />
                {sem8.data}
            </div>
        )
    }
}

export default Reflexion;