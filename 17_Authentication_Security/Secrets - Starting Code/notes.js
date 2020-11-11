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

*/