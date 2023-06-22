const authConfig = {
    authority: 'https://abc-123-def.zitadel.cloud/', //Replace this with your issuer URL
    client_id: 'xyz123456@abcd', //Replace this with your client id 
    redirect_uri: 'http://localhost:3000/',
    response_type: 'code',
    scope: 'openid profile email urn:zitadel:iam:org:project:id:<PROJECT_ID>:aud', //Replace PROJECT_ID with the id of the project where the API resides.  
    post_logout_redirect_uri: 'http://localhost:3000/',
    response_mode: 'query',
    code_challenge_method: 'S256',
  };

 export default authConfig;
