import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import AddOrder from '../Buttons/AddOrder';
import RemoveOrder from '../Buttons/RemoveOrder';



export default function PizzaCards({ menuList }) {

return (
<>
    <div>
        <h2>Menu</h2>
    </div>
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {menuList?.map((pizza) => {
                    return (
                        <Grid item xs={3} sm={4} md={4} key={pizza.id}>
                        <Box p={2} key={pizza.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={pizza.image_path}
                                        alt="pizza image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {pizza.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {pizza.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        {pizza.price}
                                    </Button>
                                    <AddOrder pizza={pizza}/>
                                    <RemoveOrder pizza={pizza}/>
                                </CardActions>
                            </Card>
                        </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    </div>
</>
);
}