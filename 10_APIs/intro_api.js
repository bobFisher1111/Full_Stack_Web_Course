/*
    - API:
        - Endpoint:
            - the code that allows two software programs to communicate with each other. 
                - connects with the software program. APIs work by sending requests for information from
                    a web application or web server and receiving a response
        - Paths:
            - different paths in the endpoint, for example:
                - endpoint:
                    https://sv443.net/jokeapi/v2/joke/ <------
                - path:
                    https://sv443.net/jokeapi/v2/joke/Dark <--- Path, choosing Dark jokes from the api
        - Parameters:
            - Go at the end of url, at the end of question mark, that they don't have a path for. Maybe some kind of 
                query they didn't think of and has a key value: like evil
                - "Order does not matter for paramters just follow &"
            - Example:
                - Path:
                    https://sv443.net/jokeapi/v2/joke/Dark <----
                - Parameters:
                    https://sv443.net/jokeapi/v2/joke/Dark?contains==evil
                - Multiple Parameters:
                    - Separated by & sign
                       https://sv443.net/jokeapi/v2/joke/Dark?blacklistFlags=racist&contains=evil 
                    - Parameters here are:
                        - &blacklistFlags
                        - &contains
        - Authentication:
            - API will require some sort of authentication, for an example weather api is free for up to certain amount of 
                calls per minute. Some may charge but must set up an account.
            - weather api:
                https://home.openweathermap.org/
            - Go to api key section:
                - https://home.openweathermap.org/api_keys
                - Copy key and use it anytime you make a request to api, may have to generate one
            - Weather docs:
                - https://openweathermap.org/current
            - Choose by city name:
                - syntax:
                    api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
                - example:
                    https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eb310b304549000b3dffe11efbef814c
            - Add another parameter, temp in differnt type like celsius or fahrenheit in imperial or metric=celsius
                - use &units= after appid
                - example:
                    https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eb310b304549000b3dffe11efbef814c&
                    units=metric 
        - Postman:
            - webapp:
                https://web.postman.co/build/workspace/My-Workspace~5fab7282-9b0b-4162-8571-a881947ab6eb
            - Get a request: Weather for city by name
                - step one past in api link:
                    https://api.openweathermap.org/data/2.5/weather
                - step 2 parameters:
                    under key: value
                        q       London
                        appid   eb310b304549000b3dffe11efbef814c
                        units   metric
                - hit send
                - gets back data in json form
        - JSON: (JavaSript Object Notation)
            - is a lightweight format for storing and transporting data. JSON is often used when data is sent from a 
                server to a web page.
            - Example:
                - JavaScript Object:
                    var wardrobe = {
                        doors: 2,
                        drawers: 2,
                        colour: "red"
                    }
                - JSON:
                    "{door: 2,drawers: 2, colour:"red"}"
        - Making GET REQUEST Project:
                                Get Request                     Request ---> Parameters/Paths
            - Client Browser ---------------> Your Server -----> API ------ Someone Else's Server
                            <---------------------- Data <---- Response <-----  
        - Project Outline:
            - Weather that will display an image according to what weather is and temp
        - HTTPS.get (Native Way):
            - documentation:
                https://nodejs.org/api/https.html#https_https_get_options_callback
            - request module is no longer being supported, use the native way
*/
// joke api