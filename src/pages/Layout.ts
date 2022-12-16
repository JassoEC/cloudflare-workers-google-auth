import { html } from 'hono/html'

export interface SiteData {
  children?: any
}
export const Layout = (props: SiteData) => html`
  <!DOCTYPE html itemscope itemtype="http://schema.org/Article">
  <html>
    <head>
      <title>Forecast Authenticator</title>
    </head>
    <body>
      ${props.children}
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-client_id="904500291703-1tfgt9lfpmuvu8naccojfj7kddc2vipt.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
        data-login_uri="https://forecast-api.emanuelkt.workers.dev/login"
        data-auto_prompt="false"
      ></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
      <script>
        function handleCredentialResponse(response) {
          console.log(response)
          // decodeJwtResponse() is a custom function defined by you
          // to decode the credential response.
          //const responsePayload = decodeJwtResponse(response.credential)
          //console.log('ID: ' + responsePayload.sub)
          //console.log('Full Name: ' + responsePayload.name)
          //console.log('Given Name: ' + responsePayload.given_name)
          //console.log('Family Name: ' + responsePayload.family_name)
          //console.log('Image URL: ' + responsePayload.picture)
          //console.log('Email: ' + responsePayload.email)
        }
      </script>
    </body>
  </html>
`
