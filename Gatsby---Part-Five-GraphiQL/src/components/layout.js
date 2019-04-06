import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql} from "gatsby"

import {rhythm} from "../utils/typography"

export default ({children}) => (
    <StaticQuery
        query={graphql`
            query{
                site{
                    siteMetadata{
                        title
                    }
                }
            }
          `   
        }       
            
                
render={data => (
    <div 
        css={css`
                padding-top: ${rhythm(1.5)};
                margin     : o auto;
                pax-width  : 700px;
                padding    : ${rhythm(2)};
            `}
    >
      <Link to={'/'}>
        <h3
            css={css`
                margin-bottom: ${rhythm(2)};
                font-style   : normal;
                display      : inline-block;
            `}
         >
            {data.site.siteMetadata.title}
         </h3>   
      </Link>  
      <Link to={'/about/'}
            css={css`
                float: right;
            `}
      >
        About
    </Link>       
        {children}
    </div>
    
    )}
/>
)