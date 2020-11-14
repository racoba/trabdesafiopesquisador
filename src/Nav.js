import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import './styles.css'


function Nav() {

  

  return (
    <Grid className='bigdiv'>
      <Grid className='nav'>


        <h3 className='botoesNav' variant="contained" >
          <Link style={{textDecoration:"none",color:"white"}} to="/">HOME</Link>
        </h3>
        <h3  className='botoesNav' variant="contained" >
        <Link style={{textDecoration:"none",color:"white"}} to="/parcerias">PARCERIAS</Link>
        </h3>
        <h3 className='botoesNav'  variant="contained" >
        <Link style={{textDecoration:"none",color:"white"}} to="/sobrenos">SOBRE NÓS</Link>
        </h3>
        <h3 className='botoesNav'  variant="contained" >
        <Link style={{textDecoration:"none",color:"white"}} to="/contato">CONTATO</Link>
        </h3>
      </Grid>

    </Grid>
  );
}

export default Nav;