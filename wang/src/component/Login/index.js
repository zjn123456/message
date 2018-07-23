import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Main from './main'
import './style.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { userLogin } = this.props;
        return (
            <Switch>
                <Route path="/" exact render={() => <Redirect to='/login' />} />
                <Route path="/login" exact render={()=><Main userLogin={userLogin}/>}/>
            </Switch>
        )
    }
}

export default App;