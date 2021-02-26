import './App.css';
import video1 from './hpv.mp4';

function App() {
    return (
        <div className="App">
            <div className="align-container">
                <div className="intro">
                    <video className="video" src={video1} width="2000" height="2000" autoplay="true" loop muted playsinline />
                    <div class="jumbotron bg-transparent justify-content-center" className="jbt">
                        <h1 class="display-4">Bonjour tout le monde!</h1>
                        <p class="lead">C'est mon carnet de bord</p>
                        <h4 class="my-4">
                            <p class="lead">
                                <a class="btn btn-outline-success btn-lg" href="./cdb-intro.html" role="button">Commencer ici</a>
                            </p>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
