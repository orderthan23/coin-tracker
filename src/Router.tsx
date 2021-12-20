import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/:coinId">
                <Coin/>
            </Route>
            <Route>
                <Coins/>
           </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;