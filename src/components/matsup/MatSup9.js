import React from 'react'
import sem9Img from '../../assets/sem9.jpg'
import sem9MSImg from '../../assets/sem9matsup.png'
import sem9MSBlog from '../../assets/sem9matsupblog.png'
import './MatSup.css';
import NavigationCarnet from '../navigationcarnet/NavigationCarnet';
import NavToast from '../navtoast/NavToast';
import Path from '../../path';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

function MatSup9() {
    return (
        <div>
            <NavigationCarnet />
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM10} lienpre={Path.SEM9PARA} />
            <div>
                <img className="header-img" src={sem9Img} alt="sem9" />
            </div>
            <div className="MatSup">
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs="auto" md={5} >
                            <Jumbotron fluid className="jumbotron-matsup">
                                <Container>
                                    <h1>Duolingo</h1>
                                    <p>
                                        Cette semaine, j'ai appris le français avec l'application Duolingo. J'ai découvert la fonction de taper
                                        des phrases au lieu de sélectionner des mots. Taper des phrases est plus amusant et plus bien pour améliorer.
                                    </p>
                                </Container>
                            </Jumbotron>
                        </Col>
                        <Col xs="auto" md={4}>
                            <img className="matsupPicture" src={sem9MSImg} alt="Duolingo" />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="auto" md={4}>
                            <a href="https://medium.com/@reveilpiquant"> <img className="matsupPicture" src={sem9MSBlog} alt="Blog en Français" /> </a>
                        </Col>
                        <Col xs="auto" md={5}>
                            <Jumbotron fluid className="jumbotron-matsup">
                                <Container>
                                    <h1>Les Blogs</h1>
                                    <p>Clicquez sur le photo pour le lien!</p>
                                    <div className="divider-small" />
                                    <p>
                                        J'adore lire les blogs. Cette semaine, j'ai lu quelques blogs en français. Les nouvelles, l'histoire des personnes, la psychologie.
                                    </p>
                                </Container>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MatSup9;