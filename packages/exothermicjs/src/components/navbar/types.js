const yaml = require('js-yaml')


export const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Navbar items={data.items} key="nav" />;
  },
  instanceOf: Navbar,
  represent: function (data) {
    const rtn = { _tag: '!navbar', ...data }
    return rtn
  }
});