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
            <NavToast semaine={"Semaine 10"} liensuv={Path.ACCUEIL} lienpre={Path.SEM10}/>
            <div>
                <img className="header-img" src={sem10Img} alt="sem10" />
            </div>
            <div className="googleslides">
            <iframe title="Sem10 Google Slides" src="https://docs.google.com/presentation/d/e/2PACX-1vQb4DYhEsiPNx3HtWA7B1okPsSPuM52l6v927R_AWk1kDPeZKxcWfxOeIbWKKLVOLTGWNnW5Mhki5hF/embed?start=true&loop=true&delayms=5000" frameborder="0" width="1440" height="639" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
    )
}

export default MatSup10;