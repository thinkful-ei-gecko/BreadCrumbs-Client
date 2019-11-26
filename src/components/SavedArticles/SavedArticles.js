import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SavedArticles extends Component {
  render() {
    return (
      <div>
        <h2>Saved Articles</h2>
        <Link to='/user/articleid'>Aricle1</Link>
        <br></br>
        <Link to='/user/articleid'>Aricle2</Link>
        <br></br>
        <Link to='/user/articleid'>Aricle3</Link>
        <br></br>
        <Link to='/user/articleid'>Aricle4</Link>
        <br></br>
        <Link to='/user/articleid'>Aricle5</Link>      
      </div>
    )
  }
}
