import { useState } from 'react';
import './vacancyCard.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import PlaceIcon from '@mui/icons-material/Place';
import FolderIcon from '@mui/icons-material/Folder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';

const VacanyCard = ({}) => {
    const el = 'el';

    return (
        
        <Card sx={{ maxWidth: 700 }}>
            <CardActionArea>
                <CardContent>
                    <Box gutterBottom sx={{ display: 'flex' }}>
                        <Avatar>
                            R
                        </Avatar>
                        <Typography variant="h6" component="h6">
                            Middle Backend Developer
                        </Typography>
                    </Box>
                    <Typography variant="body1" component="body1">
                    <List  sx={{ display: 'flex', p: 0, pb: 2, gap: '20px' }}>
                        <ListItem sx={{ display: 'flex', p: 0, alignItems: 'center', width: 'fit-content' }}>
                            <ListItemText
                                primary={
                                    <>
                                      <Typography
                                        sx={{ display: 'flex', p: 0, alignItems: 'center', width: 'fit-content', fontSize: '12px' }}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                      >
                                        <PlaceIcon/>
                                        Ambler, Pennsylvania, US
                                      </Typography>
                                    </>
                                  }
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', p: 0, width: 'fit-content' }}>
                            <ListItemText
                                primary={
                                    <>
                                      <Typography
                                        sx={{ display: 'flex', p: 0, alignItems: 'center', width: 'fit-content', fontSize: '12px' }}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                      >
                                        <FolderIcon/>
                                        Development
                                      </Typography>
                                    </>
                                  }
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', p: 0, width: 'fit-content' }}>
                            <ListItemText
                                primary={
                                    <>
                                      <Typography
                                        sx={{ display: 'flex', p: 0, alignItems: 'center', width: 'fit-content', fontSize: '12px' }}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                      >
                                        <AccessTimeIcon/>
                                        Opened 11 days ago
                                      </Typography>
                                    </>
                                  }
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', p: 0, width: 'fit-content' }}>
                            <ListItemText
                                primary={
                                    <>
                                      <Typography
                                        sx={{ display: 'flex', p: 0, alignItems: 'center', width: 'fit-content', fontSize: '12px' }}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                      >
                                        <SettingsIcon/>
                                        JAVA, SQL and Server Routing
                                      </Typography>
                                    </>
                                  }
                            />
                        </ListItem>
                    </List>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    
    )

}

export default VacanyCard;