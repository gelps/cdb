import React from 'react'
import sem9Img from '../../assets/sem9.jpg'
import './Application.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Application9() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9PARA} lienpre={Path.SEM9}/>
            <div className="Application">
                <img className="header-img" src={sem9Img} alt="sem9" />
            </div>
        </div>
    )
}

export default Application9;