import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Accueil from '../accueil/Accueil';
import Reflexion from '../reflexion/Reflexion';
import Path from '../../path';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    <Route path={Path.LANDING} exact component={Landing} />
                    <Route path={Path.ACCUEIL} exact component={Accueil} />
                    <Route path={Path.SEM8} exact render={() => (<Reflexion semaine={"sem8"} />)} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
