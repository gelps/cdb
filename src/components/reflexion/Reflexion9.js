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
            <NavToast semaine={"Semaine 9"} liensuv={Path.SEM9APP} lienpre={Path.SEM8} />
            <div className="Reflexion">
                <img className="header-img" src={sem9Img} alt="sem9" />
                <Jumbotron fluid>
                    <Container>
                        <h1>Semaine 9 Réflexion</h1>
                        <p> Notre objectif: Travaillez sur le projet </p>
                        <div className="divider" />
                        <p className="timestm-285">jeudi, 11 mars 2021 23:00 EST</p>
                        <p className="reftext">
                            It's actually been a bit of a rough day for me in the sense that I just had a midterm and it was porbably by far the
                            worst one I've taken this year. But I'm not so much upset at the fact that I don't think I did that well on it, but much
                            more so the fact that I think it was actually a very do-able (albeit a little tricky) exam and I could have done much better
                            if I did a few things differently. I think the biggest issues were that I wasn't doing the questions with enough urgency at the
                            beginning and was kind of running out of time and that when I was studying I was too focused on taking notes rather than thinking 
                            about the concepts.
                        </p>
                        <p className="reftext">
                            After a few years of not really taking any notes in my classes, I tried to take some this term but after that exam I really
                            feel like taking notes hasn't really helped me at all. I thought it would be useful to take some notes especially when it came
                            to final exam time because I found I always did much worse on finals than midterms due to not having notes to study materials
                            that were covered months ago but this term since all the notes I am going to need are online I think I might be better off just
                            not taking any more notes.
                        </p>
                        <p className="reftext">
                            Today, I was working on writing some sentences for the project final and I realized that I was really struggling to come up with any sentences
                            at all. I'm not sure if it's because I'm just too tired right now or I need more practice but it's probably both. I've been using Duolingo to
                            learn Chinese for the past couple months and I actually found it much better than when I tried to use Duolingo before. I think Duolingo might actually
                            be a much better tool to use when you have some certain basic understanding of a language than just starting from scratch where it's kind of
                            overwhelming. I might try using it practice French. I think in a way it will be kind of similar to the Kahoots we did in class, although it might
                            be a bit less interesting without the competition with classmates.
                        </p>
                        <p className="reftext">
                            To be honest, I'm kind of feeling like I'm taking on a few too many I guess I can call them "goals" right now. Even for this website,
                            I've had to cut back on many of the things I wanted to try and really just make it super basic. Recently though, I've been trying out this new productivity
                            method known as "Gamifying." Esentially what I've been doing is making a To-do list of very small but specific tasks every night for the next day and if
                            I complete all the tasks I reward myself with money I can spend in the future - but not too far in the future because I use that money to buy food too!
                            It's actually been working quite well so far - I probably wouldn't have written this reflection if it wasn't on my to-do list today.
                        </p>
                        <p className="reftext">
                            I also tried to use an app called Habitica that is apperently one of the best Gamifying Taskmanagers but I found
                            that it had a little too much going on in the UI so I think I'm just going to stick with what I have now although Habitica did have a very interesting feature:
                            it let you gain points for positive behaviours like "eat a healthy meal" but also took away points for corresponding negative behaviours such as "eat junk food."
                            Although from what I recall from psychology class, positive reinforcement tends to work much better than punishment. I've really been trying to cut back on my 
                            habit of drinking Bubble Tea/Milkshakes everyday for the past 6 months or so and I found that assigning myself the task of drinking 1 glass of water 4 times everyday
                            was actually really effective because now everytime I want to drink something, my first instinct is to drink a glass of water so I can cross off another task from the list.
                        </p>
                        <p className="reftext">
                            The project has been going okay. It doesn't seem like anyone is too into it though so I think we will just try to throw something
                            together and hope for the best.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Reflexion9;