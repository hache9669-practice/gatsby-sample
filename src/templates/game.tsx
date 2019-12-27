import * as React from "react"
import { Link } from "gatsby"
import { SiteMetadataPageContext } from "../../gatsby-node"
// ______________________________________________________
//
type Props = {
  pageContext: SiteMetadataPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>Author name is {pageContext.siteMetadata.author}</h1>
    <ul>
      <li><Link to="/authors/">Back to authors</Link></li>
      <li><Link to="/">Back to top</Link></li>
    </ul>
  </div>
)
// ______________________________________________________
//
export default Component