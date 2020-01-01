import * as React from "react"
import { Link } from "gatsby"
import { ContentfulGame } from "../../types/graphql-types"
// ______________________________________________________
//
type Props = {
  pageContext: ContentfulGame
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>{pageContext.name}</h1>
    <ul>
      <li>プレイ人数：{pageContext.playersFrom}~{pageContext.playersTo}人</li>
      <li>所要時間：{pageContext.playingTimeFrom}~{pageContext.playingTimeTo}分</li>
      <li>プレイ人数：{pageContext.playersFrom}~{pageContext.playersTo}人</li>
      <li>対象年齢：{pageContext.targetAgeFrom}歳～</li>
      <li>{pageContext.description.description}</li>
      <li>最終更新：{pageContext.updatedAt}</li>
      <li><Link to="/">Back to top</Link></li>
    </ul>
    <pre>
      {JSON.stringify(pageContext,null,2)}
    </pre>
  </div>
)
// ______________________________________________________
//
export default Component