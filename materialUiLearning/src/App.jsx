import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container}  from "@mui/material"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from "@mui/styles/makeStyles"

const useStyles = makeStyles( (theme) => ({
  container:{
    marginTop:"200px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8,0,6)
  }
}))


function App() {
  
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h5">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{marginTop:"200px"}}>
            <Typography variant="h2" align="center" color="textPrimary"
            gutterBottom>
                Photo Album
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            hello everyone. this is a photo album and this is totally stupid, but the instructor does me want to do it that way
          
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                  <Grid item>
                  <Button variant="contained" color="secondary">
                    See my other photos
                  </Button>
                </Grid>
                </Grid>
              </Grid>
            </div>
          </Typography>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App
