import React, { Component } from 'react';
import Base from './Base'; 

class Page extends Component {
  render() {
    const { data } = this.props;
    if (data && data.page) {
      const page = Object.keys(data.page).map((obj, i) => {
        const classes = data.page[obj].hasOwnProperty('class') ? data.page[obj].class : '';
        switch (obj) {
          case 'header':
            return (
              <header className={classes} key={i.toString()}>
                {data.page[obj].items}
              </header>
            );
            break;
          case 'main':
            return (
              <main className={classes} key={i.toString()}>
                {data.page[obj].items}
              </main>
            );
            break;
          case 'footer':
            return (
              <footer className={classes} key={i.toString()}>
                {data.page[obj].items}
              </footer>
            );
            break;          
          default:
            return (
              <div className={classes} id={obj}>
                {data.page[obj].items}
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