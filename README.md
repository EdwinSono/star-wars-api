
# star wars api
serveless framework, express, typescript, dynamodb, CQRS pattern.

### Documentación

- Adjuntar el archivo [swagger editor](https://editor.swagger.io/): docs/openapi.json
- Adjuntar el archivo a postman: docs/start-war-api.postman_collection.json

### Local development

```sh
npm install
serverless plugin install -n serverless-offline
npm install -D serverless-esbuild esbuild
npm install serverless-dynamodb

# run local
sls offline start
# or
serverless offline start
```

#### Add `plugins` in `serverless.yml`. 

```yml
plugins:
  - serverless-esbuild
  - serverless-dynamodb
  - serverless-offline
```

### Test local
```sh
# READ PEOPLE
curl --request GET 'http://localhost:3000/people/1'

# SAVE PEOPLE
curl --request POST 'http://localhost:3000/people' \
--header 'Content-Type: application/json' \
--data '{
    "peopleId": "1"
}'
```

### Run test

 - Guardar people: commands/savePeople.test.ts
 - Read one people: queries/getPeopleById.test.ts

```sh
npm run test
```

### Deployment

Install dependencies with:

```sh
npm install
```

and then deploy with:

```sh
serverless deploy
```

### SERVER
```sh
# READ PEOPLE
curl --request GET 'https://d16o9hgygi.execute-api.us-east-1.amazonaws.com/people/1'

# SAVE PEOPLE
curl --request POST 'https://d16o9hgygi.execute-api.us-east-1.amazonaws.com/people' \
--header 'Content-Type: application/json' \
--data '{
    "peopleId": "1"
}'
```
