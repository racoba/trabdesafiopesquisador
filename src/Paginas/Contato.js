import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import './styles.css'
import 'fontsource-roboto'



export default function Contato() {
    return (
        <div className='entire-page' >
            <Nav />
            <div className='triangle-bottom-right-contato' />
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop: "7vh",
                    marginRight: "130vh",
                    fontSize: "75px",
                    fontFamily: "roboto",
                    textDecoration: "underline",
                }}>Contato</Grid>


                <Grid item class="boxmodel" style={{ fontSize: 25 }}>
                <div >
                    <h3 class="box_content">
                        danielmarinho8@hotmail.com
                    </h3>
                    <h3 class="box_content">
                        brunoracobaldo@hotmail.com
                    </h3>
                    <h3 class="box_content">
                        joseauto13@gmail.com
                    </h3>
                    <h3 class="box_content">
                        wesleylelo0078@gmail.com
                    </h3>
                    <h3 class="box_content">
                        p.caria0@outlook.com
                    </h3>
                    <h3 class="box_content">
                        marcio.soussa@fieb.org.br
                    </h3>
                    <h3 class="box_content">
                        contato@senaicimatec.com.br
                    </h3>
                </div>
                </Grid>
                
              
                


            </Grid>

        </div>




        
    );
}