import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import Navigation from './navigation';
import Popular from './popular';
import Battle from './battle';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component = {Popular}/>
                    <Route exact path='/battle' component = {Battle}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        );
    }
}
export default hot(App);