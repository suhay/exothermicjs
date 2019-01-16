import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Header extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <header className={data.class ? data.class : ``}>
        {data.title && <ReactMarkdown source={data.title} renderers={{root:React.Fragment}} />}
        {data.content}
        {data.items}
        {children}
      </header>
    );
  }
}

export const HeaderYamlType = new yaml.Type('!header', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Header data={data} key="header" />;
  },
  instanceOf: Header,
  represent: function (data) {
    const rtn = { _tag: '!header', ...data }
    return rtn
  }
})