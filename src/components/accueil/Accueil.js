import React from 'react';
import Navigation from '../navigation/Navigation';
import './Accueil.css';
import Carousel from 'react-bootstrap/Carousel'
import sem8 from '../../assets/sem8.jpg'
import sem9 from '../../assets/sem9.jpg'
import sem10 from '../../assets/sem10.jpg'
import SemaineJumbotron from './SemaineJumbotron';
import Path from '../../path';

function Accueil() {
    return (
        <div>
            <Navigation/>
            <div className="Accueil">
                <Carousel className="carousel">
                    <Carousel.Item>
                        <div className="img">
                            <img
                                className="d-block w-100"
                                src={sem8}
                                alt="Semaine 8"
                            />
                        </div>
                        <SemaineJumbotron semaine={"Semaine 8"} date={"28 février à 6 mars"} lien={Path.SEM8} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img">
                            <img
                                className="d-block w-100"
                                src={sem9}
                                alt="Semaine 9"
                            />
                        </div>
                        <SemaineJumbotron semaine={"Semaine 9"} date={"7 mars à 13 mars"} lien={Path.SEM9} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img">
                            <img
                                className="d-block w-100"
                                src={sem10}
                                alt="Semaine 10"
                            />
                        </div>
                        <SemaineJumbotron semaine={"Semaine 10"} date={"14 mars à 20 mars"} lien={Path.SEM10} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Accueil;