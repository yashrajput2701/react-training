import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Cards() {
  const classes = useStyles();

  return (
     
    <div className="App">
        
    
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://superscience.scholastic.com/content/dam/classroom-magazines/superscience/issues/2018-19/030119/built-for-thrills/SS_030119_P10_BuiltForThrills_Med.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Roller Coaster
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://mms.businesswire.com/media/20210406005736/en/869621/4/Brie_Option_2-source.jpg?download=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rush Drive
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://miro.medium.com/max/1400/1*X2lRaXob5goGuOhdtT_9IQ.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dirt Bike
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.formula1.com/content/dam/fom-website/manual/Technical/2021/British/BRITRBRF1_Tech_Tuesday.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    F1 Racing
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/12q3/463434/the-physics-of-monster-trucks-feature-car-and-driver-photo-463808-s-original.jpg?fill=2:1&resize=1200:*"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Monster Truck
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://mcn-images.bauersecure.com/PageFiles/681989/Ducati.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bike Love
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20201127012844_20200215032755_DSC_7747.jpg&h=795&w=1200&c=0"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Vintage Cars
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/jpeg;base64,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"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Paragliding
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.raftingbali.net/wp-content/uploads/2017/12/Four-Benefit-River-Rafting-Activity-For-Health-Facebook-1200x900.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rafting
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Cards;
