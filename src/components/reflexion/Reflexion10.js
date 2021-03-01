import React from 'react'
import './Reflexion.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import sem10Img from '../../assets/sem10.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Reflexion10() {
    return (
        <div>
            <NavigationCarnet />
            <NavToast semaine={"Semaine 10"} liensuv={Path.SEM10APP} lienpre={Path.SEM9MATSUP} />
            <div className="Reflexion">
                <img className="header-img" src={sem10Img} alt="sem10" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 10 Réflexion</h1>
                        <p> ... </p>
                        <div className="divider" />
                        <p className="timestm"></p>

                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion10;