
# star wars api

### Deployment

Install dependencies with:

```sh
npm install
```

and then deploy with:

```sh
serverless deploy
```

### Local development

It is also possible to emulate DynamoDB, API Gateway and Lambda locally using the `serverless-dynamodb` and `serverless-offline` plugins. In order to do that, run:

```sh
serverless plugin install -n serverless-offline
npm install serverless-dynamodb
sls offline start
```

#### Add `plugins` in `serverless.yml`. 

```yml
plugins:
  - serverless-esbuild
  - serverless-offline
  - serverless-dynamodb
```

#### RUN LOCAL:

```bash
serverless offline start
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

### LOCAL
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
