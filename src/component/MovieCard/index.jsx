
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';


export default function MovieCard({movie}) {

  const { title, images: { jpg: { image_url } }, season, source, score, duration } = movie;
  const { genres } = movie;

const genreNames = genres.map(({ name }) => name).join(", ");

console.log(genreNames); // ["Adventure", "Drama", "Fantasy"]

  return (
    <Grid item xs={12} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={ image_url }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Season: {season}<br />
          Source: {source}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Genre: <Chip label={genreNames} />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Duration: {duration}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Rating: {score}
        </Typography>
      </CardActions>
    </Card>
    </Grid>
  );
}
