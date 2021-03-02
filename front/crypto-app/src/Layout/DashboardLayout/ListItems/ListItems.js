import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';;

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export const mainListItems = (
    <div>
        <ListItemLink button href='/latest'>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Latest AVG" />
        </ListItemLink>
        <ListItemLink button href='/history'>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
        </ListItemLink>
    </div>
);

export const secondaryListItems = (
    <div>

    </div>
);

