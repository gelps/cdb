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
            <NavToast semaine={"Semaine 8"} liensuv={Path.SEM9} lienpre={Path.ACCUEIL} />
            <div className="Reflexion">
                <img className="header-img" src={sem8Img} alt="sem8" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 8 Réflexion</h1>
                        <p> Notre objectif: Révisez dossier 5 & 6 </p>
                        <div className="divider" />
                        <p className="timestm"> lundi, 1 mars 2021 17:30 EST</p>
                        <p className="reftext">
                            Today I attempted to do both of the practice midterms. I used this as an opportunity to
                            reinforce what I already know as well as to discover where I can improve. 
                        </p>
                        <p className="reftext">
                            Some areas of improvement I identified
                            were: placement of the verb "y", needing to learn more vocabulary from dossier 5 & 6, needing to learn
                            some more weather words & phrases, as well as working with negations and reflexive verbs. 
                        </p>
                        <p className="reftext">
                            My concrete strategy for improvement is to check all of my wrong answers on the practice midterm, reflect on how
                            I came up with that answer, figure out why the right answer is the right anwser, and make the necessary 
                            adjustments to ensure that the next time I will be able to come up with the correct answer.
                        </p>
                        <p className="timestm-305"> mercredi, 3 mars 2021 20:00 EST</p>
                        <p className="reftext"> 
                            Since the last update, I have practiced with some Kahoots. Unfortunately I have been a little busy these past few
                            days so I'm not sure how much time I will be able to spend on French but hopefully later as soon as I finish writing
                            this, I can spend about 1 hour-ish redoing the first practice exam and then I will take a look at some review documents.
                        </p>
                        <p className="reftext">
                            Today my goals are to see if I corrected my mistakes from the first time I took the practice midterm, hopefully memorize some
                            useful irregular conjugations, and hopefully (if I have time) I would like to expand my vocabulary a bit. Otherwise I might
                            dedicate some time tommorow to doing so.
                        </p>
                        <p className="timestm-285"> samedi, 6 mars 2021 09:00 EST</p>
                        <p className="reftext">
                            This is definitely going to be a little embarrassing if I did badly on the midterm, but I thought it was actually
                            pretty easy - much easier than the practice ones. The hardest question was definitely the oral comprehension; I thought 
                            that part was harder than the first quiz because the anwsers wern't word for word but I still think I managed to 
                            get most of them.
                        </p>

                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion8;