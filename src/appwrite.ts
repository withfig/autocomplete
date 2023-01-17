const icon =
  "https://raw.githubusercontent.com/appwrite/appwrite/master/public/images/icon.svg";
const completionSpec: Fig.Spec = {
  name: "index",
  description: "Appwrite - Open-Source End-to-End Backend Server",
  subcommands: [
    {
      name: "login",
      description:
        "The login command allows you to authenticate and manage a user account",
      icon,
    },
    {
      name: "init",
      description:
        "The init command helps you initialize your Appwrite project, functions and collections",
      icon,
      subcommands: [
        {
          name: "project",
          description: "Initialise your Appwrite project",
          icon,
        },
        {
          name: "function",
          description: "Initialise your Appwrite cloud function",
          icon,
        },
        {
          name: "collection",
          description: "Initialise your Appwrite collections",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              args: { name: "databaseId" },
            },
            {
              name: "--all",
              description: "Flag to initialize all databases",
            },
          ],
        },
      ],
    },
    {
      name: "deploy",
      description:
        "The deploy command provides a convenient wrapper for deploying your functions and collections",
      subcommands: [
        {
          name: "function",
          description: "Deploy functions in the current directory",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              args: { name: "functionId" },
            },
            { name: "--all", description: "Flag to deploy all functions" },
          ],
        },
        {
          name: "collection",
          description: "Deploy collections in the current project",
          icon,
          options: [
            { name: "--all", description: "Flag to deploy all functions" },
          ],
        },
      ],
      icon,
    },
    {
      name: "logout",
      description:
        "The logout command allows you to logout of your Appwrite account",
      icon,
    },
    {
      name: "account",
      description:
        "The account command allows you to authenticate and manage a user account",
      subcommands: [
        {
          name: "get",
          description: "Get currently logged in user data as JSON object",
          icon,
        },
        {
          name: "create",
          description:
            "Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](/docs/client/account#accountCreateVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](/docs/client/account#accountCreateSession)",
          icon,
          options: [
            {
              name: "--userId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--password",
              description: "User password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
            {
              name: "--name",
              description: "User name. Max length: 128 chars",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "updateEmail",
          description:
            "Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request. This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--password",
              description: "User password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "createJWT",
          description:
            "Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame",
          icon,
        },
        {
          name: "getLogs",
          description:
            "Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log",
          icon,
          options: [
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "updateName",
          description: "Update currently logged in user account name",
          icon,
          options: [
            {
              name: "--name",
              description: "User name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "updatePassword",
          description:
            "Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional",
          icon,
          options: [
            {
              name: "--password",
              description: "New user password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
            {
              name: "--oldPassword",
              description: "Current user password. Must be at least 8 chars",
              args: { name: "oldPassword" },
            },
          ],
        },
        {
          name: "updatePhone",
          description:
            "Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](/docs/client/account#accountCreatePhoneVerification) endpoint to send a confirmation SMS",
          icon,
          options: [
            {
              name: "--number",
              description:
                "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212",
              isRequired: true,
              args: { name: "number" },
            },
            {
              name: "--password",
              description: "User password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "getPrefs",
          description:
            "Get currently logged in user preferences as a key-value object",
          icon,
        },
        {
          name: "updatePrefs",
          description:
            "Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded",
          icon,
          options: [
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              isRequired: true,
              args: { name: "prefs" },
            },
          ],
        },
        {
          name: "createRecovery",
          description:
            "Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              isRequired: true,
              args: { name: "url" },
            },
          ],
        },
        {
          name: "updateRecovery",
          description:
            "Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.  Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--secret",
              description: "Valid reset token",
              isRequired: true,
              args: { name: "secret" },
            },
            {
              name: "--password",
              description: "New user password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
            {
              name: "--passwordAgain",
              description: "Repeat new user password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "passwordAgain" },
            },
          ],
        },
        {
          name: "getSessions",
          description:
            "Get currently logged in user list of active sessions across different devices",
          icon,
        },
        {
          name: "deleteSessions",
          description:
            "Delete all sessions from the user account and remove any sessions cookies from the end client",
          icon,
        },
        {
          name: "createAnonymousSession",
          description:
            "Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](/docs/client/account#accountUpdateEmail) or create an [OAuth2 session](/docs/client/account#accountCreateOAuth2Session)",
          icon,
        },
        {
          name: "createEmailSession",
          description:
            "Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--password",
              description: "User password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "createMagicURLSession",
          description:
            "Sends the user an email with a secret key for creating a session. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [PUT /account/sessions/magic-url](/docs/client/account#accountUpdateMagicURLSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default",
          icon,
          options: [
            {
              name: "--userId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "updateMagicURLSession",
          description:
            "Use this endpoint to complete creating the session with the Magic URL. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/sessions/magic-url](/docs/client/account#accountCreateMagicURLSession) endpoint.  Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--secret",
              description: "Valid verification token",
              isRequired: true,
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "createOAuth2Session",
          description:
            "Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.  If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user",
          icon,
          options: [
            {
              name: "--provider",
              description:
                "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, autodesk, bitbucket, bitly, box, dailymotion, discord, dropbox, facebook, github, gitlab, google, linkedin, microsoft, notion, okta, paypal, paypalSandbox, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoom",
              isRequired: true,
              args: { name: "provider" },
            },
            {
              name: "--success",
              description:
                "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              args: { name: "success" },
            },
            {
              name: "--failure",
              description:
                "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              args: { name: "failure" },
            },
            {
              name: "--scopes",
              description:
                "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long",
              args: { name: "scopes", isVariadic: true },
            },
          ],
        },
        {
          name: "createPhoneSession",
          description:
            "Sends the user an SMS with a secret key for creating a session. Use the returned user ID and secret and submit a request to the [PUT /account/sessions/phone](/docs/client/account#accountUpdatePhoneSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes",
          icon,
          options: [
            {
              name: "--userId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--number",
              description:
                "Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212",
              isRequired: true,
              args: { name: "number" },
            },
          ],
        },
        {
          name: "updatePhoneSession",
          description:
            "Use this endpoint to complete creating a session with SMS. Use the **userId** from the [createPhoneSession](/docs/client/account#accountCreatePhoneSession) endpoint and the **secret** received via SMS to successfully update and confirm the phone session",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--secret",
              description: "Valid verification token",
              isRequired: true,
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "getSession",
          description:
            "Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used",
          icon,
          options: [
            {
              name: "--sessionId",
              description:
                "Session ID. Use the string 'current' to get the current device session",
              isRequired: true,
              args: { name: "sessionId" },
            },
          ],
        },
        {
          name: "updateSession",
          description:
            'Access tokens have limited lifespan and expire to mitigate security risks. If session was created using an OAuth provider, this route can be used to "refresh" the access token',
          icon,
          options: [
            {
              name: "--sessionId",
              description:
                "Session ID. Use the string 'current' to update the current device session",
              isRequired: true,
              args: { name: "sessionId" },
            },
          ],
        },
        {
          name: "deleteSession",
          description:
            "Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the Session ID argument, only the unique session ID provided is deleted",
          icon,
          options: [
            {
              name: "--sessionId",
              description:
                "Session ID. Use the string 'current' to delete the current device session",
              isRequired: true,
              args: { name: "sessionId" },
            },
          ],
        },
        {
          name: "updateStatus",
          description:
            "Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead",
          icon,
        },
        {
          name: "createVerification",
          description:
            "Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateEmailVerification). The verification link sent to the user's email address is valid for 7 days.  Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface",
          icon,
          options: [
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              isRequired: true,
              args: { name: "url" },
            },
          ],
        },
        {
          name: "updateVerification",
          description:
            "Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--secret",
              description: "Valid verification token",
              isRequired: true,
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "createPhoneVerification",
          description:
            "Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](/docs/client/account#accountUpdatePhone) endpoint. Learn more about how to [complete the verification process](/docs/client/account#accountUpdatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes",
          icon,
        },
        {
          name: "updatePhoneVerification",
          description:
            "Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code",
          icon,
          options: [
            {
              name: "--secret",
              description: "Valid verification token",
              isRequired: true,
              args: { name: "secret" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "avatars",
      description:
        "The avatars command aims to help you complete everyday tasks related to your app image, icons, and avatars",
      subcommands: [
        {
          name: "getBrowser",
          description:
            "You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](/docs/client/account#accountGetSessions) endpoint. Use width, height and quality arguments to change the output settings.  When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px",
          icon,
          options: [
            {
              name: "--code",
              description: "Browser Code",
              isRequired: true,
              args: { name: "code" },
            },
            {
              name: "--width",
              description:
                "Image width. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Image height. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "height" },
            },
            {
              name: "--quality",
              description:
                "Image quality. Pass an integer between 0 to 100. Defaults to 100",
              args: { name: "quality" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getCreditCard",
          description:
            "The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.  When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px",
          icon,
          options: [
            {
              name: "--code",
              description:
                "Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro",
              isRequired: true,
              args: { name: "code" },
            },
            {
              name: "--width",
              description:
                "Image width. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Image height. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "height" },
            },
            {
              name: "--quality",
              description:
                "Image quality. Pass an integer between 0 to 100. Defaults to 100",
              args: { name: "quality" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getFavicon",
          description:
            "Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL",
          icon,
          options: [
            {
              name: "--url",
              description:
                "Website URL which you want to fetch the favicon from",
              isRequired: true,
              args: { name: "url" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getFlag",
          description:
            "You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.  When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px",
          icon,
          options: [
            {
              name: "--code",
              description: "Country Code. ISO Alpha-2 country code format",
              isRequired: true,
              args: { name: "code" },
            },
            {
              name: "--width",
              description:
                "Image width. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Image height. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "height" },
            },
            {
              name: "--quality",
              description:
                "Image quality. Pass an integer between 0 to 100. Defaults to 100",
              args: { name: "quality" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getImage",
          description:
            "Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.  When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px",
          icon,
          options: [
            {
              name: "--url",
              description: "Image URL which you want to crop",
              isRequired: true,
              args: { name: "url" },
            },
            {
              name: "--width",
              description:
                "Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400",
              args: { name: "height" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getInitials",
          description:
            "Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.  You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.  When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px",
          icon,
          options: [
            {
              name: "--name",
              description:
                "Full Name. When empty, current user name or email will be used. Max length: 128 chars",
              args: { name: "name" },
            },
            {
              name: "--width",
              description:
                "Image width. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Image height. Pass an integer between 0 to 2000. Defaults to 100",
              args: { name: "height" },
            },
            {
              name: "--color",
              description:
                "Changes text color. By default a random color will be picked and stay will persistent to the given name",
              args: { name: "color" },
            },
            {
              name: "--background",
              description:
                "Changes background color. By default a random color will be picked and stay will persistent to the given name",
              args: { name: "background" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getQR",
          description:
            "Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image",
          icon,
          options: [
            {
              name: "--text",
              description: "Plain text to be converted to QR code image",
              isRequired: true,
              args: { name: "text" },
            },
            {
              name: "--size",
              description:
                "QR code size. Pass an integer between 1 to 1000. Defaults to 400",
              args: { name: "size" },
            },
            {
              name: "--margin",
              description:
                "Margin from edge. Pass an integer between 0 to 10. Defaults to 1",
              args: { name: "margin" },
            },
            {
              name: "--download",
              description:
                "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0",
              args: { name: "download" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "databases",
      description:
        "The databases command allows you to create structured collections of documents, query and filter lists of documents",
      subcommands: [
        {
          name: "list",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "create",
          icon,
          options: [
            {
              name: "--databaseId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--name",
              description: "Collection name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "getUsage",
          icon,
          options: [
            {
              name: "--range",
              description: "'Date range",
              args: { name: "range" },
            },
          ],
        },
        {
          name: "get",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
          ],
        },
        {
          name: "update",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--name",
              description: "Collection name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
          ],
        },
        {
          name: "listCollections",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "createCollection",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--name",
              description: "Collection name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--permission",
              description:
                "Specifies the permissions model used in this collection, which accepts either 'collection' or 'document'. For 'collection' level permission, the permissions specified in read and write params are applied to all documents in the collection. For 'document' level permissions, read and write permissions are specified in each document. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "permission" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "write", isVariadic: true },
            },
          ],
        },
        {
          name: "getCollection",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
          ],
        },
        {
          name: "updateCollection",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--name",
              description: "Collection name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--permission",
              description:
                "Permissions type model to use for reading documents in this collection. You can use collection-level permission set once on the collection using the 'read' and 'write' params, or you can set document-level permission where each document read and write params will decide who has access to read and write to each document individually. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "permission" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
            {
              name: "--enabled",
              description: "Is collection enabled?",
              args: { name: "enabled" },
            },
          ],
        },
        {
          name: "deleteCollection",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
          ],
        },
        {
          name: "listAttributes",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
          ],
        },
        {
          name: "createBooleanAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createEmailAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createEnumAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--elements",
              description:
                "Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 4096 characters long",
              isRequired: true,
              args: { name: "elements", isVariadic: true },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createFloatAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--min",
              description: "Minimum value to enforce on new documents",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value to enforce on new documents",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createIntegerAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--min",
              description: "Minimum value to enforce on new documents",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value to enforce on new documents",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createIpAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createStringAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--size",
              description:
                "Attribute size for text attributes, in number of characters",
              isRequired: true,
              args: { name: "size" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "createUrlAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
              args: { name: "required" },
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided. Cannot be set when attribute is required",
              args: { name: "xdefault" },
            },
            {
              name: "--array",
              description: "Is attribute an array?",
              args: { name: "array" },
            },
          ],
        },
        {
          name: "getAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "deleteAttribute",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Attribute Key",
              isRequired: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "listDocuments",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/database#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long",
              args: { name: "queries", isVariadic: true },
            },
            {
              name: "--limit",
              description:
                "Maximum number of documents to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the document used as the starting point for the query, excluding the document itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderAttributes",
              description:
                "Array of attributes used to sort results. Maximum of 100 order attributes are allowed, each 4096 characters long",
              args: { name: "orderAttributes", isVariadic: true },
            },
            {
              name: "--orderTypes",
              description:
                "Array of order directions for sorting attribtues. Possible values are DESC for descending order, or ASC for ascending order. Maximum of 100 order types are allowed",
              args: { name: "orderTypes", isVariadic: true },
            },
          ],
        },
        {
          name: "createDocument",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). Make sure to define attributes before creating documents",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--documentId",
              description:
                'Document ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "documentId" },
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              isRequired: true,
              args: { name: "data" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
          ],
        },
        {
          name: "getDocument",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--documentId",
              description: "Document ID",
              isRequired: true,
              args: { name: "documentId" },
            },
          ],
        },
        {
          name: "updateDocument",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--documentId",
              description: "Document ID",
              isRequired: true,
              args: { name: "documentId" },
            },
            {
              name: "--data",
              description:
                "Document data as JSON object. Include only attribute and value pairs to be updated",
              args: { name: "data" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
          ],
        },
        {
          name: "deleteDocument",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--documentId",
              description: "Document ID",
              isRequired: true,
              args: { name: "documentId" },
            },
          ],
        },
        {
          name: "listDocumentLogs",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--documentId",
              description: "Document ID",
              isRequired: true,
              args: { name: "documentId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "listIndexes",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
          ],
        },
        {
          name: "createIndex",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Index Key",
              isRequired: true,
              args: { name: "key" },
            },
            {
              name: "--type",
              description: "Index type",
              isRequired: true,
              args: { name: "type" },
            },
            {
              name: "--attributes",
              description:
                "Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long",
              isRequired: true,
              args: { name: "attributes", isVariadic: true },
            },
            {
              name: "--orders",
              description:
                "Array of index orders. Maximum of 100 orders are allowed",
              args: { name: "orders", isVariadic: true },
            },
          ],
        },
        {
          name: "getIndex",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Index Key",
              isRequired: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "deleteIndex",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description:
                "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection)",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--key",
              description: "Index Key",
              isRequired: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "listCollectionLogs",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "getCollectionUsage",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--collectionId",
              description: "Collection ID",
              isRequired: true,
              args: { name: "collectionId" },
            },
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
          ],
        },
        {
          name: "listLogs",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "getDatabaseUsage",
          icon,
          options: [
            {
              name: "--databaseId",
              description: "Database ID",
              isRequired: true,
              args: { name: "databaseId" },
            },
            {
              name: "--range",
              description: "'Date range",
              args: { name: "range" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "functions",
      description:
        "The functions command allows you view, create and manage your Cloud Functions",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all the project's functions. You can use the query params to filter your results",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of functions to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the function used as the starting point for the query, excluding the function itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API",
          icon,
          options: [
            {
              name: "--functionId",
              description:
                'Function ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--name",
              description: "Function name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--execute",
              description:
                "An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions. Maximum of 100 scopes are allowed, each 64 characters long",
              isRequired: true,
              args: { name: "execute", isVariadic: true },
            },
            {
              name: "--runtime",
              description: "Execution runtime",
              isRequired: true,
              args: { name: "runtime" },
            },
            {
              name: "--vars",
              description:
                "Key-value JSON object that will be passed to the function as environment variables",
              args: { name: "vars" },
            },
            {
              name: "--events",
              description: "Events list. Maximum of 100 events are allowed",
              args: { name: "events", isVariadic: true },
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--timeout",
              description: "Function maximum execution time in seconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "listRuntimes",
          description:
            "Get a list of all runtimes that are currently active on your instance",
          icon,
        },
        {
          name: "get",
          description: "Get a function by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
          ],
        },
        {
          name: "update",
          description: "Update function by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--name",
              description: "Function name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--execute",
              description:
                "An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions. Maximum of 100 scopes are allowed, each 64 characters long",
              isRequired: true,
              args: { name: "execute", isVariadic: true },
            },
            {
              name: "--vars",
              description:
                "Key-value JSON object that will be passed to the function as environment variables",
              args: { name: "vars" },
            },
            {
              name: "--events",
              description: "Events list. Maximum of 100 events are allowed",
              args: { name: "events", isVariadic: true },
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--timeout",
              description: "Maximum execution time in seconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a function by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
          ],
        },
        {
          name: "listDeployments",
          description:
            "Get a list of all the project's code deployments. You can use the query params to filter your results",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of deployments to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the deployment used as the starting point for the query, excluding the deployment itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "createDeployment",
          description:
            "Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.  This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).  Use the \"command\" param to set the entry point used to execute your code",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--entrypoint",
              description: "Entrypoint File",
              isRequired: true,
              args: { name: "entrypoint" },
            },
            {
              name: "--code",
              description:
                "Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory",
              isRequired: true,
              args: { name: "code" },
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
              isRequired: true,
              args: { name: "activate" },
            },
          ],
        },
        {
          name: "getDeployment",
          description: "Get a code deployment by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--deploymentId",
              description: "Deployment ID",
              isRequired: true,
              args: { name: "deploymentId" },
            },
          ],
        },
        {
          name: "updateDeployment",
          description:
            "Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--deploymentId",
              description: "Deployment ID",
              isRequired: true,
              args: { name: "deploymentId" },
            },
          ],
        },
        {
          name: "deleteDeployment",
          description: "Delete a code deployment by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--deploymentId",
              description: "Deployment ID",
              isRequired: true,
              args: { name: "deploymentId" },
            },
          ],
        },
        {
          name: "retryBuild",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--deploymentId",
              description: "Deployment ID",
              isRequired: true,
              args: { name: "deploymentId" },
            },
            {
              name: "--buildId",
              description: "Build unique ID",
              isRequired: true,
              args: { name: "buildId" },
            },
          ],
        },
        {
          name: "listExecutions",
          description:
            "Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin)",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of executions to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--cursor",
              description:
                "ID of the execution used as the starting point for the query, excluding the execution itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
          ],
        },
        {
          name: "createExecution",
          description:
            "Trigger a function execution. The returned object will return you the current execution status. You can ping the 'Get Execution' endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--data",
              description: "String of custom data to send to function",
              args: { name: "data" },
            },
            {
              name: "--async",
              description: "Execute code asynchronously. Default value is true",
              args: { name: "async" },
            },
          ],
        },
        {
          name: "getExecution",
          description: "Get a function execution log by its unique ID",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--executionId",
              description: "Execution ID",
              isRequired: true,
              args: { name: "executionId" },
            },
          ],
        },
        {
          name: "getUsage",
          icon,
          options: [
            {
              name: "--functionId",
              description: "Function ID",
              isRequired: true,
              args: { name: "functionId" },
            },
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "health",
      description:
        "The health command allows you to both validate and monitor your Appwrite server's health",
      subcommands: [
        {
          name: "get",
          description: "Check the Appwrite HTTP server is up and responsive",
          icon,
        },
        {
          name: "getAntivirus",
          description:
            "Check the Appwrite Antivirus server is up and connection is successful",
          icon,
        },
        {
          name: "getCache",
          description:
            "Check the Appwrite in-memory cache server is up and connection is successful",
          icon,
        },
        {
          name: "getDB",
          description:
            "Check the Appwrite database server is up and connection is successful",
          icon,
        },
        {
          name: "getQueueCertificates",
          description:
            "Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server",
          icon,
        },
        {
          name: "getQueueFunctions",
          icon,
        },
        {
          name: "getQueueLogs",
          description:
            "Get the number of logs that are waiting to be processed in the Appwrite internal queue server",
          icon,
        },
        {
          name: "getQueueWebhooks",
          description:
            "Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server",
          icon,
        },
        {
          name: "getStorageLocal",
          description:
            "Check the Appwrite local storage device is up and connection is successful",
          icon,
        },
        {
          name: "getTime",
          description:
            "Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP",
          icon,
        },
      ],
      icon,
    },
    {
      name: "locale",
      description:
        "The locale command allows you to customize your app based on your users' location",
      subcommands: [
        {
          name: "get",
          description:
            "Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.  ([IP Geolocation by DB-IP](https://db-ip.com))",
          icon,
        },
        {
          name: "getContinents",
          description:
            "List of all continents. You can use the locale header to get the data in a supported language",
          icon,
        },
        {
          name: "getCountries",
          description:
            "List of all countries. You can use the locale header to get the data in a supported language",
          icon,
        },
        {
          name: "getCountriesEU",
          description:
            "List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language",
          icon,
        },
        {
          name: "getCountriesPhones",
          description:
            "List of all countries phone codes. You can use the locale header to get the data in a supported language",
          icon,
        },
        {
          name: "getCurrencies",
          description:
            "List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language",
          icon,
        },
        {
          name: "getLanguages",
          description:
            "List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language",
          icon,
        },
      ],
      icon,
    },
    {
      name: "projects",
      description:
        "The projects command allows you to view, create and manage your Appwrite projects",
      subcommands: [
        {
          name: "list",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Results offset. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the project used as the starting point for the query, excluding the project itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "create",
          icon,
          options: [
            {
              name: "--projectId",
              description:
                'Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--name",
              description: "Project name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--teamId",
              description: "Team unique ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--description",
              description: "Project description. Max length: 256 chars",
              args: { name: "description" },
            },
            {
              name: "--logo",
              description: "Project logo",
              args: { name: "logo" },
            },
            {
              name: "--url",
              description: "Project URL",
              args: { name: "url" },
            },
            {
              name: "--legalName",
              description: "Project legal Name. Max length: 256 chars",
              args: { name: "legalName" },
            },
            {
              name: "--legalCountry",
              description: "Project legal Country. Max length: 256 chars",
              args: { name: "legalCountry" },
            },
            {
              name: "--legalState",
              description: "Project legal State. Max length: 256 chars",
              args: { name: "legalState" },
            },
            {
              name: "--legalCity",
              description: "Project legal City. Max length: 256 chars",
              args: { name: "legalCity" },
            },
            {
              name: "--legalAddress",
              description: "Project legal Address. Max length: 256 chars",
              args: { name: "legalAddress" },
            },
            {
              name: "--legalTaxId",
              description: "Project legal Tax ID. Max length: 256 chars",
              args: { name: "legalTaxId" },
            },
          ],
        },
        {
          name: "get",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
          ],
        },
        {
          name: "update",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--name",
              description: "Project name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Project description. Max length: 256 chars",
              args: { name: "description" },
            },
            {
              name: "--logo",
              description: "Project logo",
              args: { name: "logo" },
            },
            {
              name: "--url",
              description: "Project URL",
              args: { name: "url" },
            },
            {
              name: "--legalName",
              description: "Project legal name. Max length: 256 chars",
              args: { name: "legalName" },
            },
            {
              name: "--legalCountry",
              description: "Project legal country. Max length: 256 chars",
              args: { name: "legalCountry" },
            },
            {
              name: "--legalState",
              description: "Project legal state. Max length: 256 chars",
              args: { name: "legalState" },
            },
            {
              name: "--legalCity",
              description: "Project legal city. Max length: 256 chars",
              args: { name: "legalCity" },
            },
            {
              name: "--legalAddress",
              description: "Project legal address. Max length: 256 chars",
              args: { name: "legalAddress" },
            },
            {
              name: "--legalTaxId",
              description: "Project legal tax ID. Max length: 256 chars",
              args: { name: "legalTaxId" },
            },
          ],
        },
        {
          name: "delete",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--password",
              description:
                "Your user password for confirmation. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "updateAuthLimit",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--limit",
              description:
                "Set the max number of users allowed in this project. Use 0 for unlimited",
              isRequired: true,
              args: { name: "limit" },
            },
          ],
        },
        {
          name: "updateAuthStatus",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--method",
              description:
                "Auth Method. Possible values: email-password,magic-url,anonymous,invites,jwt,phone",
              isRequired: true,
              args: { name: "method" },
            },
            {
              name: "--status",
              description: "Set the status of this auth method",
              isRequired: true,
              args: { name: "status" },
            },
          ],
        },
        {
          name: "listDomains",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
          ],
        },
        {
          name: "createDomain",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--domain",
              description: "Domain name",
              isRequired: true,
              args: { name: "domain" },
            },
          ],
        },
        {
          name: "getDomain",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--domainId",
              description: "Domain unique ID",
              isRequired: true,
              args: { name: "domainId" },
            },
          ],
        },
        {
          name: "deleteDomain",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--domainId",
              description: "Domain unique ID",
              isRequired: true,
              args: { name: "domainId" },
            },
          ],
        },
        {
          name: "updateDomainVerification",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--domainId",
              description: "Domain unique ID",
              isRequired: true,
              args: { name: "domainId" },
            },
          ],
        },
        {
          name: "listKeys",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
          ],
        },
        {
          name: "createKey",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--name",
              description: "Key name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--scopes",
              description: "Key scopes list. Maximum of 100 scopes are allowed",
              isRequired: true,
              args: { name: "scopes", isVariadic: true },
            },
            {
              name: "--expire",
              description:
                "Key expiration time in Unix timestamp. Use 0 for unlimited expiration",
              args: { name: "expire" },
            },
          ],
        },
        {
          name: "getKey",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--keyId",
              description: "Key unique ID",
              isRequired: true,
              args: { name: "keyId" },
            },
          ],
        },
        {
          name: "updateKey",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--keyId",
              description: "Key unique ID",
              isRequired: true,
              args: { name: "keyId" },
            },
            {
              name: "--name",
              description: "Key name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--scopes",
              description: "Key scopes list. Maximum of 100 events are allowed",
              isRequired: true,
              args: { name: "scopes", isVariadic: true },
            },
            {
              name: "--expire",
              description:
                "Key expiration time in Unix timestamp. Use 0 for unlimited expiration",
              args: { name: "expire" },
            },
          ],
        },
        {
          name: "deleteKey",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--keyId",
              description: "Key unique ID",
              isRequired: true,
              args: { name: "keyId" },
            },
          ],
        },
        {
          name: "updateOAuth2",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--provider",
              description: "Provider Name",
              isRequired: true,
              args: { name: "provider" },
            },
            {
              name: "--appId",
              description: "Provider app ID. Max length: 256 chars",
              args: { name: "appId" },
            },
            {
              name: "--secret",
              description: "Provider secret key. Max length: 512 chars",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "listPlatforms",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
          ],
        },
        {
          name: "createPlatform",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--type",
              description: "Platform type",
              isRequired: true,
              args: { name: "type" },
            },
            {
              name: "--name",
              description: "Platform name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--key",
              description:
                "Package name for Android or bundle ID for iOS or macOS. Max length: 256 chars",
              args: { name: "key" },
            },
            {
              name: "--store",
              description:
                "App store or Google Play store ID. Max length: 256 chars",
              args: { name: "store" },
            },
            {
              name: "--hostname",
              description: "Platform client hostname. Max length: 256 chars",
              args: { name: "hostname" },
            },
          ],
        },
        {
          name: "getPlatform",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--platformId",
              description: "Platform unique ID",
              isRequired: true,
              args: { name: "platformId" },
            },
          ],
        },
        {
          name: "updatePlatform",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--platformId",
              description: "Platform unique ID",
              isRequired: true,
              args: { name: "platformId" },
            },
            {
              name: "--name",
              description: "Platform name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--key",
              description:
                "Package name for android or bundle ID for iOS. Max length: 256 chars",
              args: { name: "key" },
            },
            {
              name: "--store",
              description:
                "App store or Google Play store ID. Max length: 256 chars",
              args: { name: "store" },
            },
            {
              name: "--hostname",
              description: "Platform client URL. Max length: 256 chars",
              args: { name: "hostname" },
            },
          ],
        },
        {
          name: "deletePlatform",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--platformId",
              description: "Platform unique ID",
              isRequired: true,
              args: { name: "platformId" },
            },
          ],
        },
        {
          name: "updateServiceStatus",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--service",
              description: "Service name",
              isRequired: true,
              args: { name: "service" },
            },
            {
              name: "--status",
              description: "Service status",
              isRequired: true,
              args: { name: "status" },
            },
          ],
        },
        {
          name: "getUsage",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
          ],
        },
        {
          name: "listWebhooks",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
          ],
        },
        {
          name: "createWebhook",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--name",
              description: "Webhook name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--events",
              description: "Events list. Maximum of 100 events are allowed",
              isRequired: true,
              args: { name: "events", isVariadic: true },
            },
            {
              name: "--url",
              description: "Webhook URL",
              isRequired: true,
              args: { name: "url" },
            },
            {
              name: "--security",
              description:
                "Certificate verification, false for disabled or true for enabled",
              isRequired: true,
              args: { name: "security" },
            },
            {
              name: "--httpUser",
              description: "Webhook HTTP user. Max length: 256 chars",
              args: { name: "httpUser" },
            },
            {
              name: "--httpPass",
              description: "Webhook HTTP password. Max length: 256 chars",
              args: { name: "httpPass" },
            },
          ],
        },
        {
          name: "getWebhook",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--webhookId",
              description: "Webhook unique ID",
              isRequired: true,
              args: { name: "webhookId" },
            },
          ],
        },
        {
          name: "updateWebhook",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--webhookId",
              description: "Webhook unique ID",
              isRequired: true,
              args: { name: "webhookId" },
            },
            {
              name: "--name",
              description: "Webhook name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--events",
              description: "Events list. Maximum of 100 events are allowed",
              isRequired: true,
              args: { name: "events", isVariadic: true },
            },
            {
              name: "--url",
              description: "Webhook URL",
              isRequired: true,
              args: { name: "url" },
            },
            {
              name: "--security",
              description:
                "Certificate verification, false for disabled or true for enabled",
              isRequired: true,
              args: { name: "security" },
            },
            {
              name: "--httpUser",
              description: "Webhook HTTP user. Max length: 256 chars",
              args: { name: "httpUser" },
            },
            {
              name: "--httpPass",
              description: "Webhook HTTP password. Max length: 256 chars",
              args: { name: "httpPass" },
            },
          ],
        },
        {
          name: "deleteWebhook",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--webhookId",
              description: "Webhook unique ID",
              isRequired: true,
              args: { name: "webhookId" },
            },
          ],
        },
        {
          name: "updateWebhookSignature",
          icon,
          options: [
            {
              name: "--projectId",
              description: "Project unique ID",
              isRequired: true,
              args: { name: "projectId" },
            },
            {
              name: "--webhookId",
              description: "Webhook unique ID",
              isRequired: true,
              args: { name: "webhookId" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "storage",
      description:
        "The storage command allows you to manage your project files",
      subcommands: [
        {
          name: "listBuckets",
          description:
            "Get a list of all the storage buckets. You can use the query params to filter your results",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Results offset. The default value is 0. Use this param to manage pagination",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the bucket used as the starting point for the query, excluding the bucket itself. Should be used for efficient pagination when working with large sets of data",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "createBucket",
          description: "Create a new storage bucket",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Unique Id. Choose your own unique ID or pass the string 'unique()' to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--name",
              description: "Bucket name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--permission",
              description:
                "Permissions type model to use for reading files in this bucket. You can use bucket-level permission set once on the bucket using the 'read' and 'write' params, or you can set file-level permission where each file read and write params will decide who has access to read and write to each file individually. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "permission" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
            {
              name: "--enabled",
              description: "Is bucket enabled?",
              args: { name: "enabled" },
            },
            {
              name: "--maximumFileSize",
              description:
                "Maximum file size allowed in bytes. Maximum allowed value is 30MB. For self-hosted setups you can change the max limit by changing the '_APP_STORAGE_LIMIT' environment variable. [Learn more about storage environment variables](docs/environment-variables#storage)",
              args: { name: "maximumFileSize" },
            },
            {
              name: "--allowedFileExtensions",
              description:
                "Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long",
              args: { name: "allowedFileExtensions", isVariadic: true },
            },
            {
              name: "--encryption",
              description:
                "Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled",
              args: { name: "encryption" },
            },
            {
              name: "--antivirus",
              description:
                "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
              args: { name: "antivirus" },
            },
          ],
        },
        {
          name: "getBucket",
          description:
            "Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata",
          icon,
          options: [
            {
              name: "--bucketId",
              description: "Bucket unique ID",
              isRequired: true,
              args: { name: "bucketId" },
            },
          ],
        },
        {
          name: "updateBucket",
          description: "Update a storage bucket by its unique ID",
          icon,
          options: [
            {
              name: "--bucketId",
              description: "Bucket unique ID",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--name",
              description: "Bucket name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--permission",
              description:
                "Permissions type model to use for reading files in this bucket. You can use bucket-level permission set once on the bucket using the 'read' and 'write' params, or you can set file-level permission where each file read and write params will decide who has access to read and write to each file individually. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              isRequired: true,
              args: { name: "permission" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
            {
              name: "--enabled",
              description: "Is bucket enabled?",
              args: { name: "enabled" },
            },
            {
              name: "--maximumFileSize",
              description:
                "Maximum file size allowed in bytes. Maximum allowed value is 30MB. For self hosted version you can change the limit by changing _APP_STORAGE_LIMIT environment variable. [Learn more about storage environment variables](docs/environment-variables#storage)",
              args: { name: "maximumFileSize" },
            },
            {
              name: "--allowedFileExtensions",
              description:
                "Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long",
              args: { name: "allowedFileExtensions", isVariadic: true },
            },
            {
              name: "--encryption",
              description:
                "Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled",
              args: { name: "encryption" },
            },
            {
              name: "--antivirus",
              description:
                "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
              args: { name: "antivirus" },
            },
          ],
        },
        {
          name: "deleteBucket",
          description: "Delete a storage bucket by its unique ID",
          icon,
          options: [
            {
              name: "--bucketId",
              description: "Bucket unique ID",
              isRequired: true,
              args: { name: "bucketId" },
            },
          ],
        },
        {
          name: "listFiles",
          description:
            "Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin)",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of files to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the file used as the starting point for the query, excluding the file itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "createFile",
          description:
            "Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](/docs/server/database#storageCreateBucket) API or directly from your Appwrite console.  Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of '5MB'. The 'content-range' header values should always be in bytes.  When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in 'x-appwrite-id' header to allow the server to know that the partial upload is for the existing file and not for a new one.  If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description:
                'File ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "fileId" },
            },
            {
              name: "--file",
              description: "Binary file",
              isRequired: true,
              args: { name: "file" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
          ],
        },
        {
          name: "getFile",
          description:
            "Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File ID",
              isRequired: true,
              args: { name: "fileId" },
            },
          ],
        },
        {
          name: "updateFile",
          description:
            "Update a file by its unique ID. Only users with write permissions have access to update this resource",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File unique ID",
              isRequired: true,
              args: { name: "fileId" },
            },
            {
              name: "--read",
              description:
                "An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "read", isVariadic: true },
            },
            {
              name: "--write",
              description:
                "An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions",
              args: { name: "write", isVariadic: true },
            },
          ],
        },
        {
          name: "deleteFile",
          description:
            "Delete a file by its unique ID. Only users with write permissions have access to delete this resource",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File ID",
              isRequired: true,
              args: { name: "fileId" },
            },
          ],
        },
        {
          name: "getFileDownload",
          description:
            "Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File ID",
              isRequired: true,
              args: { name: "fileId" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getFilePreview",
          description:
            "Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File ID",
              isRequired: true,
              args: { name: "fileId" },
            },
            {
              name: "--width",
              description:
                "Resize preview image width, Pass an integer between 0 to 4000",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Resize preview image height, Pass an integer between 0 to 4000",
              args: { name: "height" },
            },
            {
              name: "--gravity",
              description:
                "Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right",
              args: { name: "gravity" },
            },
            {
              name: "--quality",
              description:
                "Preview image quality. Pass an integer between 0 to 100. Defaults to 100",
              args: { name: "quality" },
            },
            {
              name: "--borderWidth",
              description:
                "Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0",
              args: { name: "borderWidth" },
            },
            {
              name: "--borderColor",
              description:
                "Preview image border color. Use a valid HEX color, no # is needed for prefix",
              args: { name: "borderColor" },
            },
            {
              name: "--borderRadius",
              description:
                "Preview image border radius in pixels. Pass an integer between 0 to 4000",
              args: { name: "borderRadius" },
            },
            {
              name: "--opacity",
              description:
                "Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1",
              args: { name: "opacity" },
            },
            {
              name: "--rotation",
              description:
                "Preview image rotation in degrees. Pass an integer between -360 and 360",
              args: { name: "rotation" },
            },
            {
              name: "--background",
              description:
                "Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix",
              args: { name: "background" },
            },
            {
              name: "--output",
              description: "Output format type (jpeg, jpg, png, gif and webp)",
              args: { name: "output" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getFileView",
          description:
            "Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header",
          icon,
          options: [
            {
              name: "--bucketId",
              description:
                "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](/docs/server/storage#createBucket)",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--fileId",
              description: "File ID",
              isRequired: true,
              args: { name: "fileId" },
            },
            {
              name: "--destination",
              description: "Output file path",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "getUsage",
          icon,
          options: [
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
          ],
        },
        {
          name: "getBucketUsage",
          icon,
          options: [
            {
              name: "--bucketId",
              description: "Bucket ID",
              isRequired: true,
              args: { name: "bucketId" },
            },
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "teams",
      description:
        "The teams command allows you to group users of your project and to enable them to share read and write access to your project resources",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.\n \n In admin mode, this endpoint returns a list of all the teams in the current project. [Learn more about different API modes](/docs/admin)",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of teams to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the team used as the starting point for the query, excluding the team itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team",
          icon,
          options: [
            {
              name: "--teamId",
              description:
                'Team ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--name",
              description: "Team name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--roles",
              description:
                "Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long",
              args: { name: "roles", isVariadic: true },
            },
          ],
        },
        {
          name: "get",
          description:
            "Get a team by its ID. All team members have read access for this resource",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a team using its ID. Only members with the owner role can update the team",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--name",
              description: "New team name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a team using its ID. Only team members with the owner role can delete the team",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
          ],
        },
        {
          name: "listLogs",
          description: "Get the team activity logs list by its unique ID",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "getMemberships",
          description:
            "Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of memberships to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the membership used as the starting point for the query, excluding the membership itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "createMembership",
          description:
            "Invite a new member to join your team. If initiated from the client SDK, an email with a link to join the team will be sent to the member's email address and an account will be created for them should they not be signed up already. If initiated from server-side SDKs, the new member will automatically be added to the team.  Use the 'url' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.   Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when adding your platforms in the console interface",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--email",
              description: "Email of the new team member",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--roles",
              description:
                "Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long",
              isRequired: true,
              args: { name: "roles", isVariadic: true },
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API",
              isRequired: true,
              args: { name: "url" },
            },
            {
              name: "--name",
              description: "Name of the new team member. Max length: 128 chars",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "getMembership",
          description:
            "Get a team member by the membership unique id. All team members have read access for this resource",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--membershipId",
              description: "Membership ID",
              isRequired: true,
              args: { name: "membershipId" },
            },
          ],
        },
        {
          name: "updateMembershipRoles",
          description:
            "Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](/docs/permissions)",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--membershipId",
              description: "Membership ID",
              isRequired: true,
              args: { name: "membershipId" },
            },
            {
              name: "--roles",
              description:
                "An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long",
              isRequired: true,
              args: { name: "roles", isVariadic: true },
            },
          ],
        },
        {
          name: "deleteMembership",
          description:
            "This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--membershipId",
              description: "Membership ID",
              isRequired: true,
              args: { name: "membershipId" },
            },
          ],
        },
        {
          name: "updateMembershipStatus",
          description:
            "Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.  If the request is successful, a session for the user is automatically created",
          icon,
          options: [
            {
              name: "--teamId",
              description: "Team ID",
              isRequired: true,
              args: { name: "teamId" },
            },
            {
              name: "--membershipId",
              description: "Membership ID",
              isRequired: true,
              args: { name: "membershipId" },
            },

            {
              name: "--secret",
              description: "Secret key",
              isRequired: true,
              args: { name: "secret" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "users",
      description: "The users command allows you to manage your project users",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all the project's users. You can use the query params to filter your results",
          icon,
          options: [
            {
              name: "--search",
              description:
                "Search term to filter your list results. Max length: 256 chars",
              args: { name: "search" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of users to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
            {
              name: "--cursor",
              description:
                "ID of the user used as the starting point for the query, excluding the user itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "cursor" },
            },
            {
              name: "--cursorDirection",
              description:
                "Direction of the cursor, can be either 'before' or 'after'",
              args: { name: "cursorDirection" },
            },
            {
              name: "--orderType",
              description: "Order result by ASC or DESC order",
              args: { name: "orderType" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--userId",
              description:
                'User ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars',
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
            {
              name: "--password",
              description: "User password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
            {
              name: "--name",
              description: "User name. Max length: 128 chars",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "getUsage",
          icon,
          options: [
            {
              name: "--range",
              description: "Date range",
              args: { name: "range" },
            },
            {
              name: "--provider",
              description: "Provider Name",
              args: { name: "provider" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a user by its unique ID",
          icon,
        },
        {
          name: "delete",
          description:
            "Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](/docs/server/users#usersUpdateStatus) endpoint instead",
          icon,
        },
        {
          name: "updateEmail",
          description: "Update the user email by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--email",
              description: "User email",
              isRequired: true,
              args: { name: "email" },
            },
          ],
        },
        {
          name: "getLogs",
          description: "Get the user activity logs list by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination)",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "getMemberships",
          description: "Get the user membership list by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
          ],
        },
        {
          name: "updateName",
          description: "Update the user name by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--name",
              description: "User name. Max length: 128 chars",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "updatePassword",
          description: "Update the user password by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--password",
              description: "New user password. Must be at least 8 chars",
              isRequired: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "updatePhone",
          description: "Update the user phone by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--number",
              description: "User phone number",
              isRequired: true,
              args: { name: "number" },
            },
          ],
        },
        {
          name: "getPrefs",
          description: "Get the user preferences by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
          ],
        },
        {
          name: "updatePrefs",
          description:
            "Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              isRequired: true,
              args: { name: "prefs" },
            },
          ],
        },
        {
          name: "getSessions",
          description: "Get the user sessions list by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
          ],
        },
        {
          name: "deleteSessions",
          description:
            "Delete all user's sessions by using the user's unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
          ],
        },
        {
          name: "deleteSession",
          description: "Delete a user sessions by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--sessionId",
              description: "Session ID",
              isRequired: true,
              args: { name: "sessionId" },
            },
          ],
        },
        {
          name: "updateStatus",
          description:
            "Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--status",
              description:
                "User Status. To activate the user pass 'true' and to block the user pass 'false'",
              isRequired: true,
              args: { name: "status" },
            },
          ],
        },
        {
          name: "updateEmailVerification",
          description:
            "Update the user email verification status by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--emailVerification",
              description: "User email verification status",
              isRequired: true,
              args: { name: "emailVerification" },
            },
          ],
        },
        {
          name: "updatePhoneVerification",
          description:
            "Update the user phone verification status by its unique ID",
          icon,
          options: [
            {
              name: "--userId",
              description: "User ID",
              isRequired: true,
              args: { name: "userId" },
            },
            {
              name: "--phoneVerification",
              description: "User phone verification status",
              isRequired: true,
              args: { name: "phoneVerification" },
            },
          ],
        },
      ],
      icon,
    },
    {
      name: "client",
      description: "The client command allows you to configure your CLI",
      icon,
      options: [
        {
          name: "--selfSigned",
          description:
            "Configure the CLI to use a self-signed certificate ( true or false )",
          args: { name: "value" },
        },
        {
          name: "--endpoint",
          description: "Set your Apwrite server endpoint",
          args: { name: "endpoint" },
        },
        {
          name: "--projectId",
          description: "Set your Apwrite project ID",
          args: { name: "projectId" },
        },
        {
          name: "--key",
          description: "Set your Apwrite server's API key",
          args: { name: "key" },
        },
        { name: "--debug", description: "Print CLI debug information" },
        { name: "--reset", description: "Reset the CLI configuration" },
      ],
    },
  ],
  icon,
  options: [
    { name: ["-v", "--version"], description: "Output the version number" },
    { name: "--verbose", description: "Show complete error log" },
    { name: "--json", description: "Output in JSON format" },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
      isPersistent: true,
    },
  ],
};

export default completionSpec;
