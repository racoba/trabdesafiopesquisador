import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import './styles.css'




export default function SobreNos() {
    return (
        <div className='entire-page' >
            <Nav />
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop: "7vh",
                    marginRight: "130vh",
                    fontSize: "75px",
                    textDecoration: "underline"
                }}>Sobre Nós</Grid>

                <div class="boxmodel">
                    <p class="box_content" style={{fontSize: 25}}>
                    Os idealizadores e responsáveis pela criação e desenvolvimento do website são os estudantes de Engenharia de Computação, do Centro Universitário Senai CIMATEC, atualmente cursando o segundo semestre do bacharelado.  O projeto surgiu através do componente curricular de Desafio Pesquisador, tendo como responsável pela disciplina o Prof. Danilo Hansen. A criação do trabalho foi orientada pelo Prof.  Márcio Soussa. O trabalho proposto tem como objetivo trabalhar com o descarte de lixo eletrônico na cidade de Salvador, que, de acordo com a percepção dos discentes, não apresentava uma organização de informações que facilitasse a comunicação entre a população e os centros de coleta ou com as empresas privadas responsáveis por realizar tais medidas.
                    </p>
                    <h2 class="box_content" style={{textAlign: 'center'}}>Link para arquivo PDF do artigo científico escrito pela equipe sobre o projeto:</h2>
                </div>






















            </Grid>
        </div>
    );
}