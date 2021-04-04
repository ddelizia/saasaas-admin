import React from "react"
import { makeStyles } from "@material-ui/core"
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  ClearRefinements,
  Highlight,
  Pagination,
  CurrentRefinements,
} from 'react-instantsearch-dom';


import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  map: {
    width: '100%',
    height: '400px',
  },
  form: {
    maxHeight: '200px',
    overflowY: 'auto',
    display: 'block',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height: 250,
    alignContent: 'rigth'
  },
  card: {
    display: 'flex',
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'green',
  },
}))


const position = [51.505, -0.09]


const searchClient = algoliasearch('F1E1M0TTLG', '0d7c2a7d834e62bae49e764fdad4b43e',
  {
    //requestsCache: InMemoryCache
  });

const ListPage = () => {
  const classes = useStyles();

  if (typeof window !== 'undefined') {
    return (
      <InstantSearch searchClient={searchClient} indexName="buscadorsubastas" >
        <Grid container component="main" className={classes.root}>
          <Grid item xs={false} sm={3} md={3} direction="column" spacing='6'>
            <Typography variant='h5'>Parametri di ricerca</Typography>
            <div>
              <ClearRefinements />
            </div>
            <Typography variant='h6'>First Name</Typography>
            <RefinementList attribute="firstname" />

          </Grid>
          <Grid item xs={12} sm={9} md={9} spacing={4}>
            <div>
              <SearchBox searchAsYouType={false} />
            </div>
            <div>
              <CurrentRefinements />
            </div>
            <div> Map goes here </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={classes.map}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
              </Marker>
            </MapContainer>

            <Hits hitComponent={HitComponent} />

            <Pagination />
          </Grid>
        </Grid>
      </InstantSearch >
    )
  }
}

function HitComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <Highlight attribute="firstname" hit={props.hit} />

          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Highlight attribute="lastname" hit={props.hit} />
          </Typography>
        </CardContent>
      </div>

    </Card>
  )
}

export default ListPage