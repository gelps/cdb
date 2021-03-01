import React from 'react'
import sem8Img from '../../assets/sem8.jpg'
import './Reflexion.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Reflexion8() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM8APP} lienpre={Path.ACCUEIL}/>
            <div className="Reflexion">
                <img className="header-img" src={sem8Img} alt="sem8" />
            </div>
        </div>
    )
}

export default Reflexion8;