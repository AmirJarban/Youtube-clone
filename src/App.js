import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './Api/Youtube';

import { SearchBar , VideoDetail , VideoList } from "./Components"


class App extends React.Component{

  state = {
    videos : [],
    selectedVideo : ''
  }
  
  componentDidMount(){
    this.handleSubmit('react js crash course')
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params : {
        part : 'snippet',
        maxResults : 5,
        key : 'AIzaSyAd16hVAyiobV-hZZQpQdsqjvLzM5gMy1M',
        q: searchTerm,
      }
    });
    console.log(response)
    this.setState({
      videos : response.data.items ,
      selectedVideo : response.data.items[0]
    })
  }


  render(){
    const { selectedVideo , videos } = this.state;
    return(
        <Grid container justifyContent='center' spacing={10} >
          <Grid item xs={12} >
            <Grid container spacing={4} justifyContent='center'>
              <Grid item xs={11}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>
              <Grid item xs={7}>
                <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}


export default App;
