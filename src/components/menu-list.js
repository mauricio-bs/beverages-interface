import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import { EmojiFoodBeverage, AddCircle, Search } from '@material-ui/icons'

export default function MenuList() {
  return (
    <div>
      <ListItem button component="a" href={'/home'}>
        <ListItemIcon>
          <EmojiFoodBeverage />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem button component="a" href={'/modifications'}>
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText primary="Nova bebida" />
      </ListItem>
      <ListItem button component="a" href={'/modifications'}>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="Procurar bebida" />
      </ListItem>
    </div>
  )
}
