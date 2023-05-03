import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Box, Container, Toolbar, Divider, Hidden, List, ListItem, SwipeableDrawer } from '@mui/material';

export type NavMenu = {
  name: string,
  link: string,
}

const linksNavigation = [
  {name: 'home', link:'/'},
  {name: 'register', link:'/register'}
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <Container disableGutters>
        <Toolbar>
          <Hidden smDown>
            {linksNavigation.map((item: NavMenu, index: number) => (
              <Box key={index}>
                <Link 
                  style={{
                    color: '#FFFFFF',
                    marginRight: 20,
                    listStyle: 'none',
                    textDecoration: 'none'
                  }} 
                  to={item.link}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Hidden>
          <Hidden smUp>
            <MenuIcon onClick={() => setOpen(true)}/>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Toolbar>
          <ChevronRightIcon onClick={() => setOpen(false)}/>
        </Toolbar>
        <Divider />
        <List>
          {linksNavigation.map((item: NavMenu, index: number) => (
            <ListItem key={index}>
              <Link 
                style={{
                  color: '#000000',
                  listStyle: 'none',
                  textDecoration: 'none'
                }}
                to={item.link}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  )
}