import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

interface GQLQuery {
  mdx: {
    frontmatter: {
      title: string;
      thumbnail: {
        publicURL: string;
      }
    }
  }
}

const Thumbnail: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => {
  return (
    <img {...props} style={{ borderRadius: 16 }} />
  );
};

const BlogPost: React.FC<PageProps> = ({ data, children }) => {
  const typedData = data as GQLQuery;
  return (
    <div className="v group">
      <div className="h group panel">
        <Thumbnail src={typedData.mdx.frontmatter.thumbnail.publicURL} alt="" />
        <div className="surface">
          <h1>{typedData.mdx.frontmatter.title}</h1>
        </div>
      </div>
      <div className="panel surface">
        {children}
      </div>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        thumbnail {
          publicURL
        }
      }
    }
  }
`

export default BlogPost
