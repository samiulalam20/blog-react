import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from  "./components/navbar.component";
import ArticlesList from  "./components/articles-list.component";
import EditArticle from  "./components/edit-articles.component";
import CreateArticle from  "./components/create-article.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component= {ArticlesList} />
      <Route path="/edit/:id" exact component= {EditArticle} />
      <Route path="/create" exact component= {CreateArticle} />
      </div>
    </Router>
  );
}

export default App;
