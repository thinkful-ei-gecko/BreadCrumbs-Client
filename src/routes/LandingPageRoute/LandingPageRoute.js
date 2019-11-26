import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPageRoute extends Component {
  render() {
    return (
      <>
        <section>
          <div>
            <h2>Welcome to Bread Crumbs!</h2>
            <div>
              <Link to='/register'>
                <button>Join Today!</button>
              </Link>
            </div>
          </div>
          <div>
            <p>Possibly an image here? and off center with h2</p>
          </div>
        </section>
        <section>
          <div>
            <h4>Section 1</h4>
            <p>This can be a flexboxed section</p>
          </div>
          <div>
            <h4>Section 2</h4>
            <p>In the middle of the page</p>
          </div>
          <div>
            <h4>Section 3</h4>
            <p>That shows some great features</p>
          </div>
        </section>
        <section>
          <p>Maybe some bottom page stuffs? Idk</p>
        </section>
      </>
    )
  }
}