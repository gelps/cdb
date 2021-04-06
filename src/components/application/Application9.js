import React from 'react'
import sem9Img from '../../assets/sem9.jpg'
import './Application.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Application9() {
    return (
        <div>
            <NavigationCarnet/>
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9PARA} lienpre={Path.SEM9}/>
            <div className="Application">
                <img className="header-img" src={sem9Img} alt="sem9" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 9 Application</h1>
                        <p> Corriger l'examen </p>
                        <div className="divider" />
                        <p className="reftext">
                            J'ai pris beaucoup de erreurs =(. Mais, après j'ai corrigé mon examen, maintenant, je comprends. Quelques erreurs j'ai
                            corrigé: avons finis - avons fini, ont visité Québec - ont visité, ont voyagé - a voiyagé, s'est promènée - s'est promenée
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Application9;