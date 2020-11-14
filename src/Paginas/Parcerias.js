import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import './styles.css'




export default function Parcerias() {
    return (
            <div className='entire-page' >
            <Nav />
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop:"7vh",
                    marginRight:"130vh",
                    fontSize:"75px",
                    textDecoration:"underline"
                }}>Parcerias</Grid>






















            </Grid>
        </div>
    );
}