import React from 'react';
import './Card.css';
import {Grid, Grow} from '@material-ui/core';

function Cards() {
    return (
        <Grow in>
            <Grid className="container" spacing={3}>
                <Grid item>
                   <div className="card">
                   <span className="title">Clothings</span>
                        <img className="media" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/SBC/NS-AUG-SBC-MA_03._SY530_QL85_.jpg" alt=""/>
                        <div className="info">
                            <button className="btn">
                                <span className="btn-text">SHOP  NOW</span>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                   <div className="card">
                   <span className="title">Footwears</span>
                        <img className="media" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/MenSBC/3-sbcs_001_02._SY530_QL85_.jpg" alt=""/>
                        <div className="info">
                            <button className="btn">
                                <span className="btn-text">SHOP  NOW</span>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                   <div className="card">
                   <span className="title">Accessories</span>
                        <img className="media" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/MenSBC/3-sbcs_001_06._SY530_QL85_.jpg" alt=""/>
                        <div className="info">
                            <button className="btn">
                                <span className="btn-text">SHOP  NOW</span>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                   <div className="card">
                   <span className="title">Backpacks</span>
                        <img className="media" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/MenSBC/3-sbcs_001_03._SY530_QL85_.jpg" alt=""/>
                        <div className="info">
                            
                            <button className="btn">
                                <span className="btn-text">SHOP  NOW</span>
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grow>
           
    )
}

export default Cards;
