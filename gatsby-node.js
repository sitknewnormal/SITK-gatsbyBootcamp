const path = require('path')
// attaching slug to Markdown nodes
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath,'.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}
// creating pages dinamically based on templates
module.exports.createPages = async ({ graphql, actions }) => {
    //create pages from Markdown files based on blog.js template
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    //create pages from Contentful based on blog-contentful.js template
    const blogTemplateContentful = path.resolve('./src/templates/blog-contentful.js')
    const resContentful = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    resContentful.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplateContentful,
            path: `/blog-contentful/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}