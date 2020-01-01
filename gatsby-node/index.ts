import * as path from "path"
import { GatsbyNode } from "gatsby"
// import { Site, SiteSiteMetadata } from "../types/graphql-types"
// // // ______________________________________________________
// //
type Result = {
  game: any
}
// export type GamePageContext = {
//   game: Game
// } // template で利用するため export
// ______________________________________________________
//
const query = `
{
    contentfulGame(id: {eq: "b15fcf97-c051-53e8-be3b-ae9731722cb5"}) {
      id
      name
      description {
        description
      }
      playersFrom
      playersTo
      playingTimeFrom
      playingTimeTo
      targetAgeFrom
    }
  }
`

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql<Result>(query)
//   if (result.errors || !result.data) {
//     throw result.errors
//   }
//   const { siteMetadata } = result.data.site
//   if (!siteMetadata || !siteMetadata.author) {
//     throw new Error("undefined authors")
//   }

//   for (let author of siteMetadata.author) {
//     if (author) {
//       createPage<SiteSiteMetadata>({
//         path: `/author/${author}/`,
//         component: path.resolve("src/templates/author.tsx"),
//         context: { author }
//       })
//     }
//   }
}