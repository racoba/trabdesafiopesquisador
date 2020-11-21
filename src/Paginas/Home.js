import { Grid } from '@material-ui/core';
import React from 'react';
import Nav from '../Nav';
import './styles.css';
import 'fontsource-roboto'


export default function Home() {
    return (
        <div className='entire-page' >
            <Nav />
            <Grid container>

                <Grid container className='big-container'>
                    <Grid item style={{
                        marginTop: "7vh",
                        marginRight: "130vh",
                        fontSize: "75px",
                        fontFamily: "roboto",
                        textDecoration: "underline"
                    }}>Mapa</Grid>

                    <Grid container className='big-container'>
                        <Grid item class="boxmodel" style={{ fontSize: 25 }}>
                            <p class="box_content" >
                                Os idealizadores e responsáveis pela criação e desenvolvimento do website são os estudantes de Engenharia de Computação, do Centro Universitário Senai CIMATEC, atualmente cursando o segundo semestre do bacharelado.  O projeto surgiu através do componente curricular de Desafio Pesquisador, tendo como responsável pela disciplina o Prof. Danilo Hansen. A criação do trabalho foi orientada pelo Prof.  Márcio Soussa. O trabalho proposto tem como objetivo trabalhar com o descarte de lixo eletrônico na cidade de Salvador, que, de acordo com a percepção dos discentes, não apresentava uma organização de informações que facilitasse a comunicação entre a população e os centros de coleta ou com as empresas privadas responsáveis por realizar tais medidas.
                    </p>
                        </Grid>
                    </Grid>

                </Grid>
















            </Grid>

        </div>
    );
}