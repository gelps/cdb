import React from 'react'
import sem8Img from '../../assets/sem8.jpg'
import './Paragraphe.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Paragraphe8() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM8MATSUP} lienpre={Path.SEM8APP}/>
            <div className="Paragraphe">
                <img className="header-img" src={sem8Img} alt="sem8" />
            </div>
        </div>
    )
}

export default Paragraphe8;