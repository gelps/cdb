import React from 'react'
import sem10Img from '../../assets/sem10.jpg'
import './MatSup.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function MatSup10() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 10"} liensuv={Path.ACCUEIL} lienpre={Path.SEM10PARA}/>
            <div className="MatSup">
                <img className="header-img" src={sem10Img} alt="sem10" />
            </div>
        </div>
    )
}

export default MatSup10;