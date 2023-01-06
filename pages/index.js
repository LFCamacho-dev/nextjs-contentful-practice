import { createClient } from 'contentful' 

export async function getStaticProps(){
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
    })

    const res = await client.getEntries({ content_type: 'recipe'})
}

export default function Recipes() {
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}