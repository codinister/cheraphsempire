import { createClient } from "next-sanity";


const serverConfig = createClient({
  projectId: process.env.SANITY_SERVER_API_KEY,
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2025-08-18', 

})
export default serverConfig