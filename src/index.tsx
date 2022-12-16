import { Hono } from 'hono'
import { Layout, SiteData } from './pages/Layout'

const app = new Hono()

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <div>
      <h1>{props.name}</h1>
      <button id="signinButton">Sign in with Google</button>
      <h3>Rise Together</h3>
    </div>
  </Layout>
)

app.get('/', (c) => {
  const { name } = c.req.param()
  const props = {
    name: 'KingTide Forecast TimeTracker',
    siteData: {},
  }
  return c.html(<Content {...props} />)
})

export default app
