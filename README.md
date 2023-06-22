# example-quote-generator-app
A simple web application using a React front-end and a Python back-end API, both secured using ZITADEL.

## Prerequisites to Run the Sample: 

- Clone this repository. 
- Have python3 and pip3 installed in your machine.
- Install required dependencies by running `pip3 install -r requirements.txt` on your terminal.
- Create a free ZITADEL account here - https://zitadel.cloud/
- Create an instance as explained [here](https://zitadel.com/docs/guides/start/quickstart#2-create-your-first-instance). 
- Create a new project in your instance by following the steps [here](https://zitadel.com/docs/guides/start/quickstart#2-create-your-first-instance).

## Running the backend

### Register the API in ZITADEL

Follow these [instructions](https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/api-basic-authentication#1) to register an API application with Basic Authentication in ZITADEL.

### 2. Run the API 

The API has a single route:

- "/api/custom_quote" - A valid access token is required.

1. cd to this directory: `cd backend`
2. Replace the values of ZITADEL_DOMAIN, ZITADEL_INTROSPECTION_URL, API_CLIENT_ID and API_CLIENT_SECRET in the .env file with your values you obtained earlier. 
3. Run the API by running `python3 server.py` in the terminal. 
