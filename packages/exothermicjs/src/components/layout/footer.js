import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Footer extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <footer className={data.class ? data.class : ``}>
        {data.title && <ReactMarkdown source={data.title} renderers={{root:React.Fragment}} />}
        {data.content}
        {data.items}
        {children}
      </footer>
    );
  }
}

export const FooterYamlType = new yaml.Type('!footer', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Footer data={data} key="footer" />;
  },
  instanceOf: Footer,
  represent: function (data) {
    const rtn = { _tag: '!footer', ...data }
    return rtn
  }
});
