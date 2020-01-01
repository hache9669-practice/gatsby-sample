import { graphql } from "gatsby";

// TODO 型生成のために二重管理になってしまっているのがよろしくない
export const GamesForEachPages = graphql`
query GamesForEachPages {
  allContentfulGame {
    nodes {
      id
      name
      playersFrom
      playersTo
      playingTimeFrom
      playingTimeTo
      targetAgeFrom
      description {
        description
        json
      }
      bggUrl {
        bggUrl
      }
      updatedAt
    }
  }
}`;