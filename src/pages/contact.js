import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <div>
                <h1>Contat Info</h1>
                <p>Address: 5205 Glen Erin Dr</p>
                <p>e-mail: rcribeiro@me.com</p>
                <p>phone: 647-6796144</p>
                <p>See my <a href="https://twitter.com/KeySharing" target = "_blank" rel="noreferrer">twitter</a></p>
            </div>
        </Layout>
    )
}

export default ContactPage