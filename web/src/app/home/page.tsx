import { getSession } from "@auth0/nextjs-auth0"
import { redirect } from "next/navigation"

export default async function Home() {

  const session = await getSession()
  if(!session) {
    redirect('/api/auth/login')
  }

  return(
    <div>
      <h1>Welcome</h1>

      <a href="/api/auth/logout">logout</a>
    </div>
  )
    
}