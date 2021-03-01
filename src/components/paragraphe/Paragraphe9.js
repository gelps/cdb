import React from 'react'
import sem9Img from '../../assets/sem9.jpg'
import './Paragraphe.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Paragraphe9() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9MATSUP} lienpre={Path.SEM9APP}/>
            <div className="Paragraphe">
                <img className="header-img" src={sem9Img} alt="sem9" />
            </div>
        </div>
    )
}

export default Paragraphe9;