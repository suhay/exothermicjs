import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import URL from 'url-parse'
import { setGlobal, useGlobal } from 'reactn'

import schema from '../../schema'

const Link = (props) => {
  const { children, to: propsTo } = props
  const [pagesPath] = useGlobal(`pagesPath`)
  const [to] = useState(new URL(propsTo))

  const handleNav = () => {
    if (to.pathname === ``) { return }
    fetch(`/load${to.pathname === `/` ? `/index` : to.pathname}`)
      .then((response) => {
        setGlobal({ status: response.status })
        return response.text()
      })
      .then(text => setGlobal({
        data: text.startsWith(`---`) ? yaml.safeLoad(text, {
          schema: schema(),
        }) : null,
        route: to.pathname,
      }))
  }

  const isActiveRegex = new RegExp(`${pagesPath}|.exo|index`, `g`)

  return (
    <>
      {to.hash === ``
        ? <NavLink exact activeClassName="selected" to={to.pathname} onClick={handleNav} isActive={(match, location) => (!!(match && location) || to.pathname === `/${location.pathname.replace(isActiveRegex, ``)}`)} {...props}>{children}</NavLink>
        : <NavHashLink smooth activeClassName="selected" to={to.href} onClick={handleNav} {...props}>{children}</NavHashLink>
      }
    </>
  )
}

export default Link
