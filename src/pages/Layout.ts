import { html } from 'hono/html'

export interface SiteData {
  children?: any
}
export const Layout = (props: SiteData) => html`
  <!DOCTYPE html itemscope itemtype="http://schema.org/Article">
  <html>
    <head>
      <title>Forecast Authenticator</title>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
      <script
        src="https://apis.google.com/js/client:platform.js?onload=start"
        async
        defer
      ></script>

      <script>
        function start() {
          gapi.load('auth2', function () {
            auth2 = gapi.auth2.init({
              client_id:
                '904500291703-1tfgt9lfpmuvu8naccojfj7kddc2vipt.apps.googleusercontent.com',
              // Scopes to request in addition to 'profile' and 'email'
              //scope: 'additional_scope'
            })
          })
        }
      </script>
    </head>
    <body>
      ${props.children}
      <script>
        $('#signinButton').click(function () {
          // signInCallback defined in step 6.
          auth2.grantOfflineAccess().then(signInCallback)
        })

        function signInCallback(authResult) {
          if (authResult['code']) {
        
            // Hide the sign-in button now that the user is authorized, for example:
            $('#signinButton').attr('style', 'display: none');
        
            // Send the code to the server
            $.ajax({
              type: 'POST',
              url: 'http://example.com/storeauthcode',
              // Always include an `X-Requested-With` header in every AJAX request,
              // to protect against CSRF attacks.
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              },
              contentType: 'application/octet-stream; charset=utf-8',
              success: function(result) {
                // Handle or verify the server response.
              },
              processData: false,
              data: authResult['code']
            });
          } else {
            // There was an error.
          }
        }
      </script>
    </body>
  </html>
`
