import { Hono } from 'hono'
import { Layout, SiteData } from './pages/Layout'

const app = new Hono()

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <div>
      <h1>{props.name}</h1>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  </Layout>
)

const LoginContent = (props: { siteData: SiteData }) => (
  <Layout {...props.siteData}>
    <div>
      <h1>Login</h1>
    </div>
  </Layout>
)

app.get('/', (c) => {
  const props = {
    name: 'KingTide Forecast TimeTracker',
    siteData: {},
  }
  return c.html(<Content {...props} />)
})

app.post('/login', async (c) => {
  const props = { siteData: {} }
  const data = await c.req.json();
  console.log(data)
  return c.html(<LoginContent {...props} />)
})

export default app
