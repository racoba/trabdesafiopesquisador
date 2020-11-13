import { Grid } from '@material-ui/core';
import React from 'react'
import Nav from '../Nav';
import './styles.css'


export default function Home() {
    return (
        <div className='entire-page' >
            <Nav />
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop:"7vh",
                    marginRight:"130vh",
                    fontSize:"75px",
                    textDecoration:"underline"
                }}>Mapa</Grid>






















            </Grid>
        </div>
    );
}