
 EVENT endPoints

  "name": string
  "time":
    "start": datetime
    "end": datetime
  "description": string,
  "venue":
    "name": string,
    "address": string
  "image":
    "src": url,
    "alt": string

  !! THIS IS JUST A SMALL DEMO APP using react, redux, Axios, tokens,  mongoose, more fitted to ne hosted on a regular linux server 
 
   1 Can be done differently for example following https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react and microsoft guidelines

   2 Can be done differently for example following AWS and serverless library guidelines
   
   3 Can be done differently for example with PostgreSQL or a PHP or python (Django) back

   4 Can be done differently for example with react-ts (next step) or an angular frontend ....
   
  
    
    EVENTS ENDPOINT
    Why event API?
    TO BE ABLE TO MANAGE THE LOCATIONS MORE EASILY AND FRAGMENT THE API
    
    How do I get access to the different tools and endpoints?
     - swagger
     - postman
     - BROWSER dev tools

    What should I do after getting access?
      - CRUD on EVENT API - USING A FORM ON FRONT END


    TO BE DONE:  VENUE ENDPOINT
        Why venue API?
           + should be also lookup address api by postcode
         TO BE ABLE TO MANAGE THE LOCATIONS MORE EASILY AND FRAGMENT THE API
         
        How do I get access to the different tools and endpoints?
         - swagger
         - postman
         - BROWSER dev tools

        What should I do after getting access?
          - CRUD on VENUE API - USING A FORM ON APP FRONT END



    USERS ENDPOINT

        Why USER API?
         - SECURE AUTH

        How do I get access to the different tools and endpoints?
         - swagger
         - postman
         - BROWSER dev tools

        What should I do after getting access?
          - CRUD on USER API - USING A FORM ON APP FRONTEND

        How do I use [this specific feature]?
         - USER MANAGEMENT
         USER ROLES: ADMIN , NORMAL USER
