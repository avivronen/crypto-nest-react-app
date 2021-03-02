import React, { Component } from 'react';
import {CssBaseline} from "@material-ui/core";
import axios from "axios";
import SimpleTable from "../../UI/SimpleTable/SimpleTable";
import Spinner from "../../UI/Spinner/Spinner";

class Latest extends Component {

    state = {
        latest: null
    }

    async componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'quotes/latest')
            .then(response => {
                this.setState({latest: response.data});
            })
            .catch(error => {
                console.log('error');
            });
    }

    render() {

        let table = <Spinner />;

        if(this.state.latest !== null && this.state.latest && this.state.latest[0]) {
            table = <SimpleTable rows={this.state.latest} />
        }
        return (
            <React.Fragment>
                <h1>Latest AVG</h1>
                <CssBaseline />
                { table }
            </React.Fragment>
        );
    }
}

export default Latest;