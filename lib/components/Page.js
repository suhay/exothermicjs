import React, { Component } from 'react';
import Base from './Base'; 

class Page extends Component {
  render() {
    if (this.props.hasOwnProperty('data') && this.props.data.hasOwnProperty('page')) {
      const page = Object.keys(this.props.data.page).map((obj, i) => {
        switch (obj) {
          case 'header':
            return (
              <header key={i.toString()}>
                {this.props.data.page[obj]}
              </header>
            );
            break;
          case 'main':
            return (
              <main key={i.toString()}>
                {this.props.data.page[obj]}
              </main>
            );
            break;
          case 'footer':
            return (
              <footer key={i.toString()}>
                {this.props.data.page[obj]}
              </footer>
            );
            break;          
          default:
            return (
              <div id={obj}>
                {this.props.data.page[obj]}
              </div>
            );
          }
        }
      );

      return (
        <React.Fragment>
          {page}
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <p>Page not found!</p>
        </div>
      );
    }
  }
}

export default Page;