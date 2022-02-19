import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-routes'

// Pages

// Beverages
import AllBeverages from '../pages/client/Home'
import BeverageDetails from '../pages/details'
import NewBeverage from '../pages/newBeverage'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={} />
        <Route path="/" exact component={AllBeverages} />

        <PrivateRoute path="/beverages/new" exact component={NewBeverage} />
        <PrivateRoute path="/beverages/:id" exact component={BeverageDetails} />
      </Switch>
    </BrowserRouter>
  )
}
