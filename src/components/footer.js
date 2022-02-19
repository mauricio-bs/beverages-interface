import React from 'react'
import { Typography, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    position: 'relative',
    marginTop: 10,
  },
}))
export default function Footer() {
  const classes = useStyles()

  return (
    <Typography
      className={classes.footer}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <Link
        color="inherit"
        target="_blank"
        href="http://github.com/mauricio-bs"
      >
        Thyssenkrupp Campo Limpo - Eletrônica UV09
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
