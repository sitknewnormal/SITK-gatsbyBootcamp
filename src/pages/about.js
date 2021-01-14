import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
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
            <div>
                <h1>About me</h1>
                <p>I'm {data.site.siteMetadata.description}. Software Engineer and Full Stack Web Developer.</p>
                <p>I have 25 years of experience developing software</p>
                <p>If you need help <Link to="/contact">contact me</Link></p>
            </div>
        </Layout>
    )
}

export default AboutPage