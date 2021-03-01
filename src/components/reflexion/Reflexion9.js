import React from 'react'
import './Reflexion.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import sem9Img from '../../assets/sem9.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Reflexion9() {
    return (
        <div>
            <NavigationCarnet />
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9APP} lienpre={Path.SEM8MATSUP} />
            <div className="Reflexion">
                <img className="header-img" src={sem9Img} alt="sem9" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 9 Réflexion</h1>
                        <p> ... </p>
                        <div className="divider" />
                        <p className="timestm"></p>

                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion9;