const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`
// const indexName = `dev_levelshealth`

const pageQuery = `{
    pages: allWpPost {
        nodes {
            id
            slug
            title
            content
            excerpt
            featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
            }
        }
    }
  }`

function pageToAlgoliaRecord({ id, slug, title, content, excerpt, featuredImage }) {
    return {
        objectID: id,
        slug,
        title,
        content,
        excerpt,
        image: featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData?.images.fallback.src,
    }
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages?.nodes?.map(pageToAlgoliaRecord),
        indexName,
        settings: { attributesToSnippet: [`excerpt:20`] },
    },
]

module.exports = queries