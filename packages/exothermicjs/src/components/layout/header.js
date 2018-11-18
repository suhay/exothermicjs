import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

class Header extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <header className={data.class ? data.class : ``}>
        {data.content && <ReactMarkdown source={data.content} escapeHtml={false} renderers={{root:React.Fragment}} />}
        {data.items}
      </header>
    );
  }
}

const HeaderYamlType = new yaml.Type('!header', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Header data={data} key="header" />;
  },
  instanceOf: Header
});

export {
   Header, HeaderYamlType
}