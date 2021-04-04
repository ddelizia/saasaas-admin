import React, { useContext, useState } from "react"
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import CheckIcon from '@material-ui/icons/Check';
import { SubscriptionProvider, SubscriptionContext } from '../context/subscription'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  box: {
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  button: {
    textTransform: 'none',
  },
}))

interface PlanProps {
  isSecondary?: boolean
  planName: string
}

const Plan = ({ isSecondary, planName }: PlanProps) => {

  const { dispatch } = useContext(SubscriptionContext)

  const classes = useStyles();

  const selectPlan = (planString: string) => () => dispatch({
    type: 'SELECT_PLAN',
    payload: {
      plan: planName
    }
  })

  return (
    <Grid item xs={12} sm={6} md={3} >
      <Button onClick={selectPlan(planName)} variant="outlined" className={classes.button} fullWidth color={isSecondary ? "primary" : "default"}>
        <Box className={classes.box} display='block' alignItems='center' >
          <Typography color="primary" variant="h5" align="center" gutterBottom>
            Starter
      </Typography>
          <Typography variant="h6" align="center" color="secondary" gutterBottom>
            $ 4.99
        <Typography component="span" align="center" color="textPrimary">
              / Mes
        </Typography>
          </Typography>

          <Typography variant="h6" align="center">
            <CheckIcon color="primary" />
            <Typography component="span" align="center" color="textPrimary">
              Single itemjkj
        </Typography>
          </Typography>
          <Typography variant="h6" align="center">
            <CheckIcon color="disabled" />
            <Typography component="span" align="center" color="textSecondary">
              Single itemjkjlk klkj
        </Typography>
          </Typography>
        </Box>
      </Button>
    </Grid>


  )
}

const Result = () => {
  const { state } = useContext(SubscriptionContext)
  return (
    < Grid item xs={12} >
      <Typography variant="h2" align="center">Selected plan: {state?.selectedPlan}</Typography>
    </Grid >
  )
}

const SubscriptionPage = () => {
  const classes = useStyles();

  return (
    <SubscriptionProvider>
      <Grid container component="main" className={classes.root} spacing={2} alignItems="center">
        <Grid item xs={12} >
          <Typography variant="h2" align="center">Planes</Typography>
        </Grid>
        <Result />
        <Plan planName="a" />
        <Plan planName="b" isSecondary />
        <Plan planName="c" />
        <Plan planName="d" />

      </Grid>
    </SubscriptionProvider>

  )
}

export default SubscriptionPage;