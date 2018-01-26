import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import Banner from './Banner.js'
import AdBar from './AdBar.js'


//Importing Components
import Article from './Articles/Article.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    const allArticles = [];
    let reqUrl = "https://www.reddit.com/top.json";
    fetch(reqUrl).then((response)=>{
      return response.json()
    }).then((json)=>{
      let items = json.data.children;
      for(let i =0;i<items.length;i++){
        try{
        let postTime = parseFloat(items[i].data.created_utc) *1000;
        let currentTime = new Date();
        let timeSincePost = parseInt(((currentTime-postTime)/(1000*60*60))%24);
        allArticles.push(<Article postLink={items[i].data.permalink} subreddit={items[i].data.subreddit} votes={items[i].data.score} author={items[i].data.author} hours={timeSincePost} articleIndex={i+1} imgSrc={items[i].data.preview.images[0].source.url} title={items[i].data.title} />);
        }catch(e){
          console.log("Piece missing from json reponse. Skipping this post");
        }
      }
      this.setState({
        articles:allArticles
      })
    }).catch((err)=>{
      console.log("err making fetch request");
    });
  }
  render() {
    return (
      <div className="App">
      <Nav />
      <Banner />
      <AdBar />
        <div className="article-container">
          {this.state.articles}
        </div>
      </div>
    );
  }
}

export default App;