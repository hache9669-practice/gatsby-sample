import React from "react"
// importを追記
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    query allContentfulGame {
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
    }
  `)
  return (
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
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage