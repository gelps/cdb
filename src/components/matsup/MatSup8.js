import React from 'react'
import sem8Img from '../../assets/sem8.jpg'
import './MatSup.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function MatSup8() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM9} lienpre={Path.SEM8PARA}/>
            <div>
                <img className="header-img" src={sem8Img} alt="sem8" />
            </div>
        </div>
    )
}

export default MatSup8;