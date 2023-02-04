import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import "../../static/styles.css";
import "./index.css";
import { Tag } from "../components/Tag";
import { InvisibleLink } from "../components/Links";

interface ArticlePreviewProps {
  title: string;
  imageSrc: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  imageSrc,
  description,
  date,
  tags,
  slug,
}) => {
  return (
    <InvisibleLink href={`/${slug}`} className="surface" key={slug}>
      <div style={{
        display: "flex",
        gap: 8,
      }}>
        <img src={imageSrc} style={{
          width: 96,
          borderRadius: 8
        }} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <h2>{title}</h2>
          <div style={{
            display: "flex",
            gap: 4,
          }}>
            {
              tags.map((tag) => (
                <Tag key={tag} content={tag} tagColor="#8caaee" />
              ))
            }
          </div>
        </div>
      </div>
      <p>
        {description}
      </p>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: '#838ba7',
      }}>
        <p>min read</p>
        <p>{date}</p>
      </div>
    </InvisibleLink>
  );
};

interface GQLQuery {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        description: string;
        slug: string;
        tags: string[];
        title: string;
        thumbnail: {
          publicURL: string;
        }
      }
    }[];
  }
}

export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: "YYYY MM DD")
        description
        slug
        tags
        title
        thumbnail {
          publicURL
        }
      }
    }
  }
}`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const typedData = data as GQLQuery;
  return (
    <div className="group h">
      <div className="group v">
        <div className="panel surface" data-name="about_me">
          <h1>Hi, I'm Jerome WANG!</h1>
          <p>
            But I prefer if you call me immjs or informa online. <br />
            Here you will find information about my skills
            and can even learn a bit about me!
          </p>
        </div>
        <div className="panel group v" data-name="skillset">
          <div className="surface">
            <h1>Skillset</h1>
            <p>
            I have been programming for the past 8 years and
            have specialised in Web Development, but I am trying
            to diversify myself towards a wider understanding
            of the software and hardware fields.
            </p>
          </div>
          <div className="group h">
            <div className="surface">
              <h2>Web Dev</h2>
              <p>
              - React<br />
              - Vue<br />
              - HTML/CSS/JS<br />
              - TypeScript
              </p>
            </div>
            <div className="surface">
              <h2>Tools</h2>
              <p>
              - Git<br />
              - Linux<br />
              &nbsp;&nbsp;^ Main OS<br/>
              - Figma
              </p>
            </div>
            <div className="surface">
              <h2>Languages</h2>
              <p>
              - French<br />
              &nbsp;&nbsp;^ Native<br/>
              - English<br/>
              &nbsp;&nbsp;^ B2
              </p>
            </div>
          </div>
        </div>
        <div className="panel group v" data-name="projects">
          <div className="surface">
            <h1>
              Projects
            </h1>
            <p>
              I don't contribute so much to open source.<br />
              Instead, I code what I need and what may help me in my everyday life.
              It's a bit egoistic but it's what makes me passonate about what I code!
            </p>
          </div>
          <div className="group h">
            <div className="surface">
              <h2>
                Mailbox
              </h2>
              <p>
                Allows you to link mail addresses to your discord server.
                Make as many mailboxes as you need!
              </p>
            </div>
            <div className="surface">
              <h2>
                Backup
              </h2>
              <p>
                A modular backup utility that allows you to back up your
                apps and app data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="group v">
        <div className="panel group v" data-name="articles">
          <div className="surface">
            <h1>
              Articles
            </h1>
            <p>
              Rants, Opinions and probably random nonsense too.
            </p>
          </div>
          {
            typedData.allMdx.nodes.map(({ frontmatter }) => (
              <ArticlePreview
                title={frontmatter.title}
                imageSrc={frontmatter.thumbnail.publicURL}
                description={frontmatter.description}
                date={frontmatter.date}
                tags={frontmatter.tags}
                key={frontmatter.slug}
                slug={frontmatter.slug}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default IndexPage
