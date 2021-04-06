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
            <NavToast semaine={"Semaine 10"} liensuv={Path.SEM10MATSUP} lienpre={Path.SEM9MATSUP} />
            <div className="Reflexion">
                <img className="header-img" src={sem10Img} alt="sem10" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 10 Réflexion</h1>
                        <p> Nos objectifs: les articles, commander au restaurant, faire des courses </p>
                        <div className="divider" />
                        <p className="timestm"></p>
                        <p classname="reftext">
                            Actually I found remembering which article to use was quite straightforward. A lot of it is pretty intuitive
                            (but obviously in that case some mistakes will be made) although I will say just being given the rule helped a lot; 
                            however, if I am really thinking about which one to use I just tried to compare what we learned to some common patterns
                            I saw in French.
                        </p>
                        <p classname="reftext">
                            For example, when we learned that items after a counting word always use the article "de,"
                            I just starting thinking of the counting word as the main word and the item as a word that describes the counting word. 
                            Effectively, the line of thought goes like this: trois cent grammes... Mais, trois cent grammes de quoi? Ah,
                            trois cent grammes <i>de</i> pommes. Then I just extended that to the negation rule as well, just thinking of
                            ne pas as a counting word (i.e. "none of apples"). 
                        </p>
                        <p classname="reftext">
                            From the perspective of an English speaker, I think this is definitely
                            one of the most noticeable patterns in French because it appears everywhere (e.g. Canadiens de Montréal, huile d'olive, etc);
                            I think the rule is (although I'm not 100% sure since I just made this up), whenever you have a noun describing another noun in English,
                            almost always in French, it will be the nouns swapped around with a de added in between although to be honest, I'm not particularly a fan of
                            that characterization because I think it is too rule based.
                        </p>
                        <p classname="reftext">
                            For le, la, les, du, de la, des I thought it was pretty straightforward. It is just the difference between countable
                            and uncountable items with respect to gender/plurality.
                        </p>

                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion10;