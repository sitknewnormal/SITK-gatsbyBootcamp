import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`)
return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2> I'm {data.site.siteMetadata.description}, a full stack developer living in Toronto</h2>
    </Layout>
  )
}

export default IndexPage