import React from 'react'
import Nav from '../Nav';
import { Grid } from '@material-ui/core';
import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Triangulao from '../Images/triangulo.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 180,
    },
});


export default function Parcerias() {
    const classes = useStyles();
    return (
        <div className='entire-page' >
            <Nav />
            <div className='triangle-bottom-right'/>
            <Grid container className='big-container'>
                <Grid item style={{
                    marginTop: "7vh",
                    marginRight: "130vh",
                    fontSize: "75px",
                    fontFamily: "roboto",
                    textDecoration: "underline"
                }}>Parcerias</Grid>

                {/* <img src={Triangulao} id='triangulao'/> */}
                

                <Grid container id='cards-grid'>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Empresa 1
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 1
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>
                            </CardActions>
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
                                        Empresa 2
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 2
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Empresa 3
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 3
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container id='cards-grid'>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Empresa 4
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 4
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image=""
                                    title="Empresa 5"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Empresa 5
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 5
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>
                            </CardActions>
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
                                        Empresa 6
                              </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui terá a descrição com as informações da Empresa 6
                             </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Visite-os
                             </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                










            </Grid>
            
        </div>
    );
}