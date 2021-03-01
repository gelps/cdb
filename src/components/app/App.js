import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Accueil from '../accueil/Accueil';
import Path from '../../path';
import Reflexion8 from '../reflexion/Reflexion8';
import Application8 from '../application/Application8';
import Paragraphe8 from '../paragraphe/Paragraphe8';
import MatSup8 from '../matsup/MatSup8';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path={Path.LANDING} exact component={Landing} />
                    <Route path={Path.ACCUEIL} exact component={Accueil} />
                    <Route path={Path.SEM8} exact component={Reflexion8} />
                    <Route path={Path.SEM8APP} exact component={Application8} />
                    <Route path={Path.SEM8PARA} exact component={Paragraphe8} />
                    <Route path={Path.SEM8MATSUP} exact component={MatSup8} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
