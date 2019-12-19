// import path from "path"
// import { GatsbyNode } from "gatsby"
// import { Site, SiteSiteMetadata } from "../types/graphql-types"
// // // ______________________________________________________
// //
// type Result = {
//   site: Site
// }
// export type SiteMetadataPageContext = {
//   siteMetadata: SiteSiteMetadata
// } // template で利用するため export
// // ______________________________________________________
// //
// const query = `
// {
//   site {
//     siteMetadata {
//         title
//         description
//         author
//     }
//   }
// }
// `

// export const createPages: GatsbyNode["createPages"] = async ({
//   graphql,
//   actions: { createPage }
// }) => {
//   const result = await graphql<Result>(query)
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
// }