import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Footer extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <footer className={data.class ? data.class : ``}>
        {data.content && <ReactMarkdown source={data.content} escapeHtml={false} renderers={{root:React.Fragment}} />}
        {data.items && data.items}
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
  instanceOf: Footer
});
