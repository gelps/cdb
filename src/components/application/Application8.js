import React from 'react'
import sem8Img from '../../assets/sem8.jpg'
import './Application.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Application8() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM8PARA} lienpre={Path.SEM8}/>
            <div className="Application">
                <img className="header-img" src={sem8Img} alt="sem8" />
            </div>
        </div>
    )
}

export default Application8;