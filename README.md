# graphql_backend_example

## Description
Return rating pages

## Launch project
For launch this project you need use:
```
docker-compose up -d
```
After launch project you should wait fake data creating. You can check it in logs:
```
docker-compose logs -f -t
```
When tool will be ready you see it in logs. For example:
```
You have 2004 documents in collection
Server ready at http://localhost:4000/graphql
```

If you want set custom environments then you should create `.env` file and add needed environments.
```
nano .env
```
## Examples
### Query
```
{
  rating(page:1){
    name,
    time,
    speed,
    color
  }
}
```


## Environments
`FAKE_USERS_COUNT` - How much users do you need? Default value is `4000001`
`DOCS_INSERT_COUNT` - How much users for one insert? Default value is `100000` 
`SERVER_PORT` - default is `4000`
`MONGO_URL` - default is `mongodb://mongo:27017/test`