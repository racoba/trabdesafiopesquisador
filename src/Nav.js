import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import './styles.css'


function Nav() {

  return (
    <>
      <Grid className='nav'>
        <Button className='botoesNav' component={Link} to="/" variant="contained" >
          HOME
        </Button>
        <Button className='botoesNav' component={Link} to="/parcerias" variant="contained" >
          parcerias
        </Button>
        <Button className='botoesNav' component={Link} to="/sobrenos" variant="contained" >
          Sobre Nós
        </Button>
        <Button className='botoesNav'component={Link} to="/contato" variant="contained" >
          contato
        </Button>
      </Grid>

    </>
  );
}

export default Nav;