import { GatsbyNode } from 'gatsby';

const TEST_QUERY = `
  query Test {
    allMdx {
      edges {
        node {
          internal {
            contentFilePath
          }
        }
      }
    }
  }
`;

export const createPages: GatsbyNode["createPages"] = async ({ graphql }) => {
  // BAD: does NOT generate Queries.TestQuery
  const testResult = await graphql(TEST_QUERY);
  if (testResult.data) {
    console.log("t");
  }

  // GOOD: does generate Queries.Test2Query
  const test2Result = await graphql<Queries.Test2Query>(`
    query Test2 {
      allMdx {
        edges {
          node {
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);
  if (test2Result.data) {
    console.log("t");
  }
}