import React from 'react'
import sem10Img from '../../assets/sem10.jpg'
import './Application.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Application10() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 10"} liensuv={Path.SEM10PARA} lienpre={Path.SEM10}/>
            <div className="Application">
                <img className="header-img" src={sem10Img} alt="sem10" />
            </div>
        </div>
    )
}

export default Application10;