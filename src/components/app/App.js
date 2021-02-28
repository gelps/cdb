import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Accueil from '../accueil/Accueil';
import Path from '../../path';

function App() {
    return (
        <BrowserRouter basename="/cdb">
            <div>
                <Switch>
                    <Route path={Path.LANDING} exact component={Landing} />
                    <Route path={Path.ACCUEIL} exact component={Accueil} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
