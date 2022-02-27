import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [cards, setCards] = React.useState([
        {
            title: 'dog1', image: 'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg', id: 1,
            about: 'The Golden Retriever is a British breed of retriever dog of medium size.It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.',
            price: 25000,
            Food_Type: 'Veg/Non-veg',
            environment: 'Homely'
        },
        {
            title: 'dog2', image: 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg', id: 2,
            about: 'The Golden Retriever is a British breed of retriever dog of medium size.It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.',
            price: 15000,
            Food_Type: 'Veg/Non-veg',
            environment: 'Homely'
        },
        {
            title: 'dog3', image: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80', id: 3,
            about: 'The Golden Retriever is a British breed of retriever dog of medium size.It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.',
            price: 5000,
            Food_Type: 'Veg/Non-veg',
            environment: 'Homely'
        },
        {
            title: 'dog4', image: 'https://images.news18.com/ibnlive/uploads/2021/08/1628056310_dogdrinking-1200x800.png', id: 4,
            about: 'The Golden Retriever is a British breed of retriever dog of medium size.It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.',
            price: 250000,
            Food_Type: 'Veg/Non-veg',
            environment: 'Homely'
        }
    ])

    return (
        <div className='mx-1 my-1 grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
            {cards.map((cards, index) => (
                <Card className='md:w-auto  sm:w-60'>
                    <CardHeader
                        title={cards.title}
                        subheader="September 14, 2016"
                    />
                    <CardMedia className='md:h-48 mx-3'
                        // sx={{ maxWidth: 305}}
                        sx={{
                            width: ['100%', '90%', '90%'],
                          }}
                        component="img"
                        image={cards.image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {cards.about}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            Price : {cards.price}
                        </Typography>
                        <Typography>
                            Food : {cards.Food_Type}
                        </Typography>
                        <Typography>
                            Environment : {cards.environment}
                        </Typography>

                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </div>

    );
}
