import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Accueil from '../accueil/Accueil';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/cdb/" component={Landing} />
                    <Route path="./accueil" exact component={Accueil} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
