import React from 'react'
import sem10Img from '../../assets/sem10.jpg'
import './Paragraphe.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';

function Paragraphe10() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 10"} liensuv={Path.SEM10MATSUP} lienpre={Path.SEM10APP}/>
            <div className="Paragraphe">
                <img className="header-img" src={sem10Img} alt="sem10" />
            </div>
        </div>
    )
}

export default Paragraphe10;