import { request } from '../src/index'

;(async () => {
  const query = /* GraphQL */ `
    query getMovie($title: String!) {
      Movie(title: $title) {
        releaseDate
        actors {
          name
        }
      }
    }
  `

  const variables = {
    title: 'Inception',
  }

  const data = await request(
    'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
    query,
    variables
  )

  console.log(JSON.stringify(data, undefined, 2))
})()
