import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core'
// Components
import Menu from '../components/menu'
import Footer from '../components/footer'
// API
import api from '../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  button: {
    margin: 10,
    backgroundColor: 'SlateBlue',
    color: 'white',
  },
  table: {
    minWidth: 650,
  },
}))

export default function NewBeverage() {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: '',
    description: '',
    image_url: '',
  })

  async function handleSubmit() {
    const data = {
      name: form.name,
      description: form.name,
      image_url: form.image_url,
    }

    const response = await api.post('/api/beverages', data)

    if (response.status === 201) {
      window.location.href = '/'
    } else {
      alert('Falha ao atualizar as informações, tente novamente mais tarde')
    }
  }

  return (
    <div className={classes.root}>
      <Menu title={'Bebidas'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Grid item xs={12} sm={6}>
                      <img href={form.image_url} alt={form.name} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        name="name"
                        fullWidth
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        required
                        name="description"
                        fullWidth
                        autoComplete="description"
                        value={form.description}
                        onChange={(e) => setForm(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleSubmit}
                    color="primary"
                  >
                    Salvar
                  </Button>
                </Grid>
              </Paper>
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
