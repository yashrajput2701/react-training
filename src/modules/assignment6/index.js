import React, {Component,} from 'react';
import Mainscreen from './Mainscreen';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class assignment6 extends Component{
    render() {
        return(
            <div>
            <Mainscreen />
            {/* <Signup />
            <Login />
            <Movie /> */}
            {/* <Router>
          
          <Switch>
              <Route exact path='/' component={Mainscreen} />
              <Route path='/Mainscreen' component={Signup} />
              <Route path='/Signup' component={Login} />
              <Route path='/Login' component={Movie} />
          </Switch>
        
      </Router> */}
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default assignment6;