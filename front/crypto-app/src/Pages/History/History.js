import React, { Component } from 'react';
import {CssBaseline} from "@material-ui/core";
import axios from "axios";
import SimpleTable from "../../UI/SimpleTable/SimpleTable";
import Spinner from "../../UI/Spinner/Spinner";

class History extends Component {

    state = {
        history: null
    }

    async componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'quotes/history')
            .then(response => {
                this.setState({history: response.data});
            })
            .catch(error => {
                console.log('error');
            });
    }

    render() {

        let table = <Spinner />;

        if(this.state.history !== null && this.state.history && this.state.history[0]) {
            table = <SimpleTable rows={this.state.history} />
        }
        return (
            <React.Fragment>
                <h1>History (Latest 30 results)</h1>
                <CssBaseline />
                { table }
            </React.Fragment>
        );
    }
}

export default History;