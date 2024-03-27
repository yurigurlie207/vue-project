import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import { inject } from 'vue'

  //code for building sanity client
  const client = createClient({
      projectId: 't9oo4sro',
      dataset: 'production',
      useCdn: true, // set to `false` to bypass the edge cache
      apiVersion: '2023-09-19', // use current date (YYYY-MM-DD) to target the latest API version
    })

  //code for creating sanity project image link
  //will turn this: https://cdn.sanity.io/images/undefined/undefined/05cc96c4e4b29df93e0284086d8d9495b8a2249f-742x514.png
  //into this: https://cdn.sanity.io/images/t9oo4sro/production/05cc96c4e4b29df93e0284086d8d9495b8a2249f-742x514.png 

  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }

  inject('urlFor', urlFor)

export {client, urlFor}
 
