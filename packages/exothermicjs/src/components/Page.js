import React, { Fragment } from 'react'

const Page = ({ data }) => (
  <Fragment>
    {data && data.page
      ? data.page
      : (<p>Page not found!</p>)}
  </Fragment>
)

export default Page
