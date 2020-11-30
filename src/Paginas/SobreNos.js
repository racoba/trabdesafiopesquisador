import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.css'
import 'fontsource-roboto'
import Bruno from '../Images/bruno.jpeg'
import Pedro from '../Images/pedro.jpeg'
import Wesley from '../Images/wesley.jpeg'
import Zinho from '../Images/zinho.jpeg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 180,
    },
});


export default function SobreNos() {
    const classes = useStyles();
    return (
        <div className='entire-page' >
            <Nav />
            <div className='triangle-bottom-right-sobre'/>
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop: "7vh",
                    marginRight: "130vh",
                    fontSize: "75px",
                    fontFamily: "roboto",
                    textDecoration: "underline",
                }}>Sobre Nós</Grid>


                

                <Grid container id='cards-grid'>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Bruno}
                                    title="Empresa 1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Bruno Racobaldo
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 1
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                          
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Daniel Marinho
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 2
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                           
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Zinho}
                                    title="Empresa 3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        José Auto
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 3
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                </Grid>

                <Grid container id='cards-grid'>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Pedro}
                                    title="Empresa 4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pedro Caria
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 4
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Wesley}
                                    title="Empresa 5"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Wesley Bispo
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 5
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 6"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Márcio Soussa <br/> (Coordenador)
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 6
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                










            </Grid>
            
        </div>
    );
}