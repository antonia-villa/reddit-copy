import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import Banner from './Banner.js'
import AdBar from './AdBar.js'

//Importing Components
import Article from './Articles/Article.js'
class App extends Component {
  articles = (len) =>{
    const allArticles = [];
    for(let i =0;i<len;i++){
      allArticles.push(<Article imgSrc="test" title="test" />);
    }
    return allArticles;
  } 
  render() {
    return (
      <div className="App">
      <Nav />
      <Banner />
      <AdBar />

        <div className="article-container">
          {this.articles(3)}
        </div>
      </div>
    );
  }
}

export default App;
