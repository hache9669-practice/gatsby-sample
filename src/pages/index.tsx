import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GamesForIndexQuery } from "../../types/graphql-types"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

type Props = {
  data: GamesForIndexQuery
}

export const pageQuery = graphql`
query GamesForIndex {
  allContentfulGame {
    nodes {
      name
      playersFrom
      playersTo
      playingTimeFrom
      playingTimeTo
      targetAgeFrom
    }
  }
}`;

const Component: React.FC<Props> = ({data}) => (
    <Layout>
      <SEO title="Home" />
      <h1>My Game List</h1>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulGame.nodes.map(({
          name,
          playersFrom,
          playersTo,
          playingTimeFrom,
          playingTimeTo,
          targetAgeFrom
       }) => (
        <div>
          <h3>{name}</h3>
          <p>プレイ人数：{playersFrom}~{playersTo}人</p>
          <p>所要時間：{playingTimeFrom}~{playingTimeTo}分</p>
          <p>プレイ人数：{playersFrom}~{playersTo}人</p>
          <p>対象年齢：{targetAgeFrom}歳～</p>
        </div>
      ))}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )

export default Component