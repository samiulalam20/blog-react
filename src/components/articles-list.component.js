import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Article = props => (
    <tr>
        <td>{props.article.title}</td>
        <td>{props.article.description}</td>
        <td>{props.article.writing}</td>
        <td>
            <Link to={"/edit/"+props.article._id}>edit</Link> | <a href='#' onClick={() => { props.deleteArticle(props.article._id) }}>delete</a>
        </td>
    </tr>
)

export default class ArticlesList extends Component {
    constructor(props) {
        super(props);

        this.deleteArticle = this.deleteArticle.bind(this);

        this.state = {articles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/')
        .then(response => {
            this.setState({ articles: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
//delete article
    deleteArticle(id) {
        axios.delete('http://localhost:5000/articles/'+id)
        .then(res => console.log(res.data));
        this.setState({
            articles: this.state.articles.filter(el => el._id !== id)
        })
    }

    articleList() {
        return this.state.articles.map(currentarticle => {
            return <Article article={currentarticle} deleteArticle={this.deleteArticle} key={currentarticle._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3> All Articles</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Writing</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.articleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
