import * as path from "path"
import { GatsbyNode } from "gatsby"
import { ContentfulGame, GamesForEachPagesQuery } from "../types/graphql-types"

// TODO 型生成のために二重管理になってしまっているのがよろしくない
const query = `
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
      }
      bggUrl {
        bggUrl
      }
      updatedAt
    }
  }
}`;

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql<GamesForEachPagesQuery>(query);
  if (result.errors || !result.data) {
    throw result.errors
  }
  const games = result.data.allContentfulGame.nodes
  if (!games || games.length === 0) {
    throw new Error("undefined games")
  }

  games.forEach(game => {
    createPage<ContentfulGame>({
      path: `/games/${game.name}_${game.id}`,
      component: path.resolve("src/templates/game.tsx"),
      context: game as ContentfulGame
    })
  });
}