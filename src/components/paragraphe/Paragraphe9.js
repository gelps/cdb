import React from 'react'
import sem9Img from '../../assets/sem9.jpg'
import sem9ParaImg from '../../assets/sem9para.jpg'
import './Paragraphe.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Paragraphe9() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9MATSUP} lienpre={Path.SEM9APP}/>
            <div className="Paragraphe">
                <img className="header-img" src={sem9Img} alt="sem9" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 9 Paragraphe</h1>
                        <p> La graduation </p>
                        <div className="divider" />
                        <p className="reftext">
                            Je imagine que je vais aller à la cérémonie de la graduation. Je vais porter une grande robe de graduation, un grand chapeau,
                            et des chaussures noir. Après la cérémonie, je vais porter un costume noir et une cravate rouge.
                        </p>
                        <img src={sem9ParaImg} alt="sem9para" />
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Paragraphe9;