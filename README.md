# example-quote-generator-app
A simple web application using a React front-end and a Python back-end API, both secured using ZITADEL.

## Prerequisites to run the app: 

- Clone this repository. 
- Have python3 and pip3 installed in your machine.
- Create a free ZITADEL account here - https://zitadel.cloud/
- Create an instance as explained [here](https://zitadel.com/docs/guides/start/quickstart#2-create-your-first-instance). 
- Create a new project in your instance by following the steps [here](https://zitadel.com/docs/guides/start/quickstart#2-create-your-first-instance).

## Running the backend

### Register the API in ZITADEL

Follow these [instructions](https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/api-basic-authentication#1) to register an API application with Basic Authentication in ZITADEL.

### Run the API 

The API has a single route:

- "/api/custom_quote" - A valid access token is required.

1. cd to the backend directory: `cd backend`
2. Install required dependencies by running `pip3 install -r requirements.txt` on your terminal.
3. Replace the values of ZITADEL_DOMAIN, ZITADEL_INTROSPECTION_URL, API_CLIENT_ID and API_CLIENT_SECRET in the .env file with your values you obtained earlier. 
4. Run the API by running `python3 server.py` in the terminal. 

### Test the API

1. Create a service user as instructed [here]([https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/service-user-client-credentials](https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/service-user-client-credentials#2-create-a-service-user-with-client-credentials-in-zitadel-)https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/service-user-client-credentials#2-create-a-service-user-with-client-credentials-in-zitadel-). You can skip creating the role and authorization.
2. Obtain a token by running the client-credentials-token-generator.py as instructed [here] (https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/service-user-client-credentials#3-generate-a-token-). You can perform the instructions in this directory in a different terminal.

### Invoke the API with token

1. Invoke the API using the following cURL command:
`curl -X GET -H "Authorization: Bearer $TOKEN" http://localhost:5000/api/custom_quote`

2. You should get a response with Status Code 200 in the following format: 
`{"quote":"If you're going through hell, keep going. - Winston Churchill"}`



 
