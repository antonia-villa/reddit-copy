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
        allArticles.push(<Article imgSrc={items[i].data.preview.images[0].source.url} title={items[i].data.title} />);
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

        <div className="article-container">
          {this.state.articles}
        </div>
      </div>
    );
  }
}

export default App;