import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Accueil from '../accueil/Accueil';
import Path from '../../path';
import Reflexion8 from '../reflexion/Reflexion8';
import Application8 from '../application/Application8';
import Paragraphe8 from '../paragraphe/Paragraphe8';
import MatSup8 from '../matsup/MatSup8';
import Reflexion9 from '../reflexion/Reflexion9';
import Application9 from '../application/Application9';
import Paragraphe9 from '../paragraphe/Paragraphe9';
import MatSup9 from '../matsup/MatSup9';
import Reflexion10 from '../reflexion/Reflexion10';
import Application10 from '../application/Application10';
import Paragraphe10 from '../paragraphe/Paragraphe10';
import MatSup10 from '../matsup/MatSup10';

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
                    <Route path={Path.SEM9} exact component={Reflexion9} />
                    <Route path={Path.SEM9APP} exact component={Application9} />
                    <Route path={Path.SEM9PARA} exact component={Paragraphe9} />
                    <Route path={Path.SEM9MATSUP} exact component={MatSup9} />
                    <Route path={Path.SEM10} exact component={Reflexion10} />
                    <Route path={Path.SEM10APP} exact component={Application10} />
                    <Route path={Path.SEM10PARA} exact component={Paragraphe10} />
                    <Route path={Path.SEM10MATSUP} exact component={MatSup10} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
