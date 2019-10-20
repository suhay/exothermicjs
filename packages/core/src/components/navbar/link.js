import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import fetch from 'isomorphic-fetch'
import URL from 'url-parse'
import { setGlobal, useGlobal } from 'reactn'

import { apply } from '../../schema'

const Link = (props) => {
  const { children, to: propsTo } = props
  const [pagesPath] = useGlobal(`pagesPath`)
  const [route] = useGlobal(`route`)
  const [to] = useState(new URL(propsTo))

  const handleNav = () => {
    if (to.pathname === ``) { return }
    fetch(`/load${to.pathname === `/` ? `/index` : to.pathname}`)
      .then((response) => {
        setGlobal({ status: response.status })
        return response.text()
      })
      .then((text) => setGlobal({
        data: text.startsWith(`---`) 
          ? apply(text) 
          : null,
        route: to.pathname,
      }))
  }

  const isActiveRegex = new RegExp(`${pagesPath}|.exo|index`, `g`)

  return (
    <>
      {to.hash !== ``
        ? <NavHashLink smooth activeClassName="selected" to={route + to.hash}>{children}</NavHashLink>
        : <NavLink exact activeClassName="selected" to={to.pathname} onClick={handleNav} isActive={(match, location) => (!!(match && location) || to.pathname === `/${location.pathname.replace(isActiveRegex, ``)}`)} {...props}>{children}</NavLink>}
    </>
  )
}

export default Link
