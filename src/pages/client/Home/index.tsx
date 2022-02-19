import React, { useState, useEffect } from 'react'
// Material UI
// Elements
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from '@material-ui/core'
// Components
import Menu from '../../../components/menu'
import Footer from '../../../components/footer'

// API
import api from '../../../services/api'

// stylesheet
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  media: {
    height: 140
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  button: {
    margin: 10,
    backgroundColor: 'SlateBlue',
    color: 'white'
  },
  table: {
    minWidth: 650
  }
}))

function createData(id, name, description, image_url) {
  return { id, name, description, image_url }
}

const beverages = [
  createData(
    1,
    'cappucino',
    'beverage based on coffe',
    '../assets/capuccino.jpg'
  ),
  createData(
    2,
    'mocaccino',
    'beverage base on coffe',
    '../assets/mocaccino.jpg'
  )
]

export default function BeveragesList() {
  const classes = useStyles()

  const [/* beverage, */ setBeverages] = useState()

  useEffect(() => {
    async function loadBeverages() {
      const res = await api.get('/api/beverages')
      setBeverages(res.data)
    }
    loadBeverages()
  })

  return (
    <div className={classes.root}>
      <Menu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3} xs={12}>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  {beverages.map((row) => (
                    <Grid sm={4} className={classes.paper} key={row.id}>
                      <Card>
                        <CardActionArea href={'/beverages/detail/' + row.id}>
                          <CardMedia
                            className={classes.media}
                            image={row.image_url}
                            title={row.name}
                          />
                          <CardContent>
                            <Typography variant="h5" component="h2">
                              {row.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                              {row.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Detalhes
                          </Button>
                          <Button size="small" color="secondary">
                            Deletar
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </div>
      </main>
    </div>
  )
}
