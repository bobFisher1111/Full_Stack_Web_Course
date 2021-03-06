/*
    - Authentication & Security:
        - Level 1: Security: Username & Password
        - Level 2: Security: Database Encryption:
            - documentation:
                - https://www.npmjs.com/package/mongoose-encryption
            - better ways of doing it, find out but use mongoose-encryption package
            - Environmental Variables for Secrets:
                - docs:
                   - https://www.npmjs.com/package/dotenv
                * must be put at top of app.js file
                - One way is to use dotenv from npm
                    - npm install dotenv
                - in root directory create it with only .env file
        - Level 3: Hashing Passwords
            - No longer needs the secret key
            - store has on database, almost impossible to reverse
            - Hash Function:
                - Use MD5 Package:
                    - Docs:
                        - https://www.npmjs.com/package/md5
                    - Install:
                        - npm install md5
        - Level 4: Salting & Hashing Passwords with bcrypt:
            - Salting is taking the password then add random # to it at the end
                and then hashit. Making it more complex
            - It stores the random salt in the database, because it will be diffrent
                each time
            - Use bcrypt:
                - docs & install: Must have stable version of node.js
                    - https://www.npmjs.com/package/bcrypt
                    - npm i bcrypt
                - It uses salt routes:
                    - take password + salt then bcrypt it then add salt again
                        and then bycrpt it, as many times as needed
        - Level 5: Cookies & Sessions:
            - Cookies:
                - HTTP cookie - Wikipediaen.wikipedia.org › wiki › HTTP_cookie An HTTP cookie is a small 
                    piece of data stored on the user's computer by the web browser while browsing a website.
            - Sessions (Cookie):
                -  Is a period of time browser interacts with server, like logging in and browsing website,
                    website dosn't need to ask again to log in, until a period of time. When user logs out
                    that is when session ends and cookie for session is destoryed
            - Passport:
                - docs & install:
                    - https://www.npmjs.com/package/passport
                    - https://www.npmjs.com/package/passport-local
                    - https://www.npmjs.com/package/passport-local-mongoose
                    - https://www.npmjs.com/package/express-session

                - Used to implement cookies and session
                - Serialize: Creates message inside Cookie
                - Deserialize: Descovers the message inside the cookies
                - Code must be placed in same order as in the app.js setting it up

        - Level 6: OAuth 2.0 Implement Sign in with Google
            - Can be used for multiple things like logging in, we will use facebook login for our site
                - 1. Granular Access Levels:
                    - User logs into facebook, you can request certains things from facebook
                - 2. Read/Read + Write Access
                - 3. Revoke Access
            - How it works:
                - The user gets sent over to facebook or whatever to log in and then Auth code sent 
                    to the website, authenticate them
                - Auth Code VS Access Token:
                    - Auth Code is one time visit
                    - Access Token last longer and we can retrieve email and other things form it
            - passport-google-oauth20
                    - Install:
                        - http://www.passportjs.org/packages/passport-google-oauth/
                        - passport-google-oauth20
                    - After install must create a project on google developers console
                        - https://console.developers.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project
                    - Setup credntials
                        -  scopes: 
                            - auth/userinfo/email
                            - auth/userinfo/profile
                            - openid // associate with your personal info on Google
                        - Create OAuth client ID // update in production for local testing 
                            - web app
                            - authorized javascript origins
                                - http://localhost:3000
                            - redirect url:
                                - http://localhost:300/auth/google/secrets
                            - client id:
                                247879929359-jv7ck4i8vbm25pgvtje45f32usa94s1u.apps.googleusercontent.com
                            - client secrets:
                                M5kJrB2FV12KOnMzuonjKbXH
*/