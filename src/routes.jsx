import { Route, Switch } from "react-router-dom";
import Home from './Pages/Today/index';
import Daily from './Pages/Daily/index';

export default function Routes() {

  return(
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/daily' component={Daily} />
    </Switch>
  )
}
