import React from "react"
import Link from "gatsby-link"

const IndexPage = ({data}) => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="columns">
          <div className="popular-services-wrapper">
            <h2 className="base-caption base-caption--center base-caption--undefined">Модули</h2>
            <div className="popular-services">
              {data.allMarkdownRemark.edges.map((usluga)=>{
                let frontmatterUsluga = usluga.node.frontmatter
                if (frontmatterUsluga.type === "modules"){
                  return (
                    <Link key={frontmatterUsluga.key} className="usluga-card" to={frontmatterUsluga.path} >
                      <div className="card-caption">
                        <div className="card-caption__img-wrapper">
                          <img src={frontmatterUsluga.icon} alt="icon" />
                        </div>
                        <h4 className="card-caption__name">{frontmatterUsluga.title}</h4>
                      </div>
                      <div className="usluga-card__links">
                        <p className="usluga-card__link">Посмотреть<span className="arrow__right" /></p>
                      </div>
                    </Link>
                  )
                } else return null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQueryModules {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            icon
            key
            type
          }
        }
      }
    }
  }
`;
