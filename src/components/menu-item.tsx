import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createStyles, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface Props {
  icon: any
  title: string
  subItems?: {
    title: string
    link: string
  }[]

}

const MenuItem = ({ icon, title, subItems }: Props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    if (subItems) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
        {subItems ? (open ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}
      </ListItem>
      { subItems?.map(element => (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary={element.title} />
            </ListItem>
          </List>
        </Collapse>
      ))}

    </>
  )
}

export default MenuItem;