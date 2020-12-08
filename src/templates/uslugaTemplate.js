import React from "react"
import Link from "gatsby-link"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="columns medium-12">
          <section className="nameCategory">
            <div className="card-caption large">
              <div className="card-caption__img-wrapper">
                <img src={frontmatter.icon} alt="Выдача ордера" />
              </div>
              <h4 className="card-caption__name">{frontmatter.title}</h4>
            </div>
            <Link to={frontmatter.dir_url}>
              <button type="button" className="button button-lg button-arrow-left">{frontmatter.dir_url_title}</button>
            </Link>
          </section>
        </div>
        <div className="columns medium-9">
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          {frontmatter.captionTitle &&
            <section className="titleStep">
              <ul className="titleStep__list transportAndDriving">
                <li className="list__caption">{frontmatter.captionTitle}</li>
                {frontmatter.captionText &&
                <li className="list__content">{frontmatter.captionText}</li>
                }
              </ul>
            </section>
          }
        </div>
        {frontmatter.itemList &&
          <div className="columns medium-9">
            <div className="service">
              <div className="steps-wrapper">
                {frontmatter && frontmatter.itemList && frontmatter.itemList.map((test, index)=>{
                  return (
                    <ul key={test[0]} className="steps transportAndDriving">
                      <li className="steps__caption"><span>{index+1}</span>{test[0]}</li>
                      {test[1] &&
                      <li className="steps__content">
                        <div>{test[1]}</div>
                      </li>
                      }
                    </ul>
                  )
                })}
                {frontmatter.lastItemCaption &&
                <ul className="lastStep transportAndDriving">
                  <li className="lastStep__caption"><span />{frontmatter.lastItemCaption}</li>
                  {frontmatter.lastItemText &&
                  <li className="lastStep__content">{frontmatter.lastItemText}</li>
                  }
                </ul>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dir_url
        dir_url_title
        icon
        title
        itemList
        captionTitle
        captionText
        lastItemCaption
        lastItemText
      }
    }
  }
`;