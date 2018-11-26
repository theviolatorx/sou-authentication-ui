import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Jumbotron from "../Jumbotron";
import Panel from "../../pages/Panel";
import Cadastro from "../../pages/Cadastro";

import './styles.scss';

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Panel}/>
                        <Route path='/cadastro' component={Cadastro}/>
                    </Switch>
                </Router>
            </div>
            </Fragment>
        )
    }
}

export default Container