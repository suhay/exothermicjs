import React from 'react'

const Page = ({ data }) => (
  <>
    {data && data.page}
    {!data && <p>Page not found!</p>}
  </>
)

export default Page
