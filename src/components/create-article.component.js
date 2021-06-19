import React, { Component } from 'react';
import axios from 'axios';

export default class CreateArticles extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeWriting = this.onChangeWriting.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            writing: '',
        }

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeWriting(e) {
        this.setState({
            writing: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const article = {
            title: this.state.title,
            description: this.state.description,
            writing: this.state.writing,
        }

        console.log(article);

        axios.post('http://localhost:5000/articles/add', article)
        .then(res => console.log(res.data));

        window.location = '/';
    }
    render() {
        return (
    <div>
      <h3>Create New Article</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <textarea  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group"> 
          <label>Writing: </label>
          <textarea  type="text"
              required
              className="form-control"
              value={this.state.writing}
              onChange={this.onChangeWriting}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Article" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}
