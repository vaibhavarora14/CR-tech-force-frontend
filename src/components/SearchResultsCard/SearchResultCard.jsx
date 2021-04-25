import { Badge, Button, Card, CardHeader, IconButton, SvgIcon, Typography, withStyles, withTheme } from '@material-ui/core';
import React, {Component} from 'react';
import GreenTick from '../GreenTick/GreenTick';
import ThumbsUp from '../../global/assets/icons/thumsup.svg';
import ThumbsDown from '../../global/assets/icons/thumbsdown.svg';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        minWidth: theme.spacing(37.25),
        // border: '1px solid #F1F1F1'
        background: 'linear-gradient(97.93deg, #4452CE 43.88%, #6744CC 109.61%)',
    },
    cardHeader: {
        display: 'flex', 
        flexDirection: 'column', 
        padding: theme.spacing(3, 2.75),
        color: '#fff'
    },
    cardTitle: {
        lineHeight: '23.6px'
    },
    cardContent: {
        display: 'flex', 
        flexDirection: 'column', 
        background: '#fff',
        padding: theme.spacing(3, 4, 3.75, 3),
        color: '#8F8F8F',
        position: 'relative'
    },
    cardFooter: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        padding: theme.spacing(2, 3),
        color: '#fff'
    },
    thumbsUp: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column',
        marginLeft: theme.spacing(5)
    },
    thumbsDown: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column', 
        marginLeft: theme.spacing(2.5)
    },
    badge: {
        marginTop: theme.spacing(-1),
        marginRight: theme.spacing(-1),
    },
  });


class SearchResultCard extends Component {

    state = {
        title: 'Nirala Hospital',
        lastVerified: '20 mins',
        phone: '9718497676',
        location: 'Noida',
        details: 'Lorem Ipsum Dolor Sit',
        thumbsUpcount: 4,
        thumbsDownCount: 0,
    }


    render() {
        const { classes, theme } = this.props;
        const { title, lastVerified, phone, location, details, thumbsUpcount, thumbsDownCount } = this.state;
        return (
            <div className={classes.container}>
                <Card variant='outlined' className={classes.root}>
                    <div className={classes.cardHeader}>
                        <div style={{display: 'flex'}}>
                            <Typography variant='body1'>{title}</Typography>
                            <GreenTick />                        
                        </div>
                        <Typography style={{opacity: 0.7}} variant='body2'>Last Verified: {lastVerified} ago</Typography>
                    </div>
                    
                    <div className={classes.cardContent}>
                        <Typography variant='body2'>Phone</Typography>
                        <Typography variant='h6'>{phone}</Typography>

                        <Typography style={{marginTop: theme.spacing(2)}} variant='body2'>Location</Typography>
                        <Typography variant='body1'>{location}</Typography>

                        <Typography style={{marginTop: theme.spacing(2)}} variant='body2'>Details</Typography>
                        <Typography variant='body1'>{details}</Typography>

                        <Button style={{
                            position: 'absolute',
                            top: theme.spacing(3.75),
                            right: theme.spacing(3),
                        }} color='primary' variant='outlined'>COPY</Button>
                    </div>

                    <div className={classes.cardFooter}>
                        <Typography style={{opacity: 0.7}} variant='body1'>Was this helpful?</Typography>
                        <div className={classes.thumbsUp}>
                            <IconButton style={{background: '#cccccc'}}>
                                <Badge classes={{badge: classes.badge}} color='secondary' badgeContent={thumbsUpcount}>
                                    <img src={ThumbsUp} alt={"thumbs up"} />
                                </Badge>
                            </IconButton>
                            <Typography style={{opacity: 0.7, marginTop: theme.spacing(0.25)}} variant='subtitle2'>Yes</Typography>
                        </div>
                        <div className={classes.thumbsDown}>
                            <IconButton style={{background: '#cccccc'}}>
                                <Badge classes={{badge: classes.badge}} color='secondary' badgeContent={thumbsDownCount}>
                                    <img src={ThumbsDown} alt={"thumbs down"} />
                                </Badge>
                            </IconButton>
                            <Typography style={{opacity: 0.7, marginTop: theme.spacing(0.25)}} variant='subtitle2'>No</Typography>
                        </div>
                    </div>
                </Card>
                
                <Button color='primary' variant='outlined' style={{marginTop: theme.spacing(3)}}>
                    Share
                </Button>
            </div>
        )
    }
}

export default withTheme(withStyles(styles)(SearchResultCard))