import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable(props) {
    const classes = useStyles();


    let table = '';
    if(props.rows != null) {
        table = (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                Object.keys(props.rows[0]).map(function(key, index) {
                                    return <TableCell key={'cell'+key}>{key}</TableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(props.rows).map(function(key, index) {
                                const item = props.rows[key];
                                return (
                                    <TableRow key={'row'+key}>
                                        {
                                            Object.keys(item).map(function(key, index) {
                                                return (
                                                    <TableCell key={'cellitem'+key}>{item[key]}</TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                );
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (
        table
    );
}

