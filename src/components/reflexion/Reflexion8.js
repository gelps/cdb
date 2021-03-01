import React from 'react'
import './Reflexion.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import sem8Img from '../../assets/sem8.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Reflexion8() {
    return (
        <div>
            <NavigationCarnet />
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM8APP} lienpre={Path.ACCUEIL} />
            <div className="Reflexion">
                <img className="header-img" src={sem8Img} alt="sem8" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 8 Réflexion</h1>
                        <p> Notre objectif: Révisez dossier 5 & 6 </p>
                        <div className="divider" />
                        <p className="timestm"> lundi, 1 mars 2021 17:30 EDT</p>
                        <p className="reftext">
                            Today I attempted to do both of the practice midterms. I used this as an opportunity to
                            reinforce what I already know as well as to discover where I can improve. </p>
                        <p className="reftext">
                            Some areas of improvement I identified
                            were: placement of the verb "y", needing to learn more vocabulary from dossier 5 & 6, needing to learn
                            some more weather words & phrases, as well as working with negations and reflexive verbs. </p>
                        <p className="reftext">
                            My concrete strategy for improvement is to check all of my wrong answers on the practice midterm, reflect on how
                            I came up with that answer, figure out why the right answer is the right anwser, and make the necessary 
                            adjustments to ensure that the next time I will be able to come up with the correct answer.
                        </p>

                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion8;