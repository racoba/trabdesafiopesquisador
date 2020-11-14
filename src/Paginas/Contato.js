import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import './styles.css'



export default function Contato() {
    return (
        <div className='entire-page' >
            <Nav />
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop: "7vh",
                    marginRight: "130vh",
                    fontSize: "75px",
                    textDecoration: "underline"
                }}>Fale Conosco</Grid>

                <div class="boxmodel">
                    <h3 class="box_content">
                        E-Mail1:
                    </h3>
                    <h3 class="box_content">
                        E-Mail2:
                    </h3>
                    <h3 class="box_content">
                        E-Mail3:
                    </h3>
                    <h3 class="box_content">
                        E-Mail4:
                    </h3>
                    <h3 class="box_content">
                        E-Mail5:
                    </h3>
                    <h3 class="box_content">
                        E-Mail Orientador:
                    </h3>
                    <h3 class="box_content">
                        E-Mail Senai Cimatec:
                    </h3>
                </div>




























            </Grid>
        </div >
    );
}