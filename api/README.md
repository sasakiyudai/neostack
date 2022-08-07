### after change the schema
```
docker-compose exec api go get github.com/99designs/gqlgen@v0.17.13
docker-compose exec api go generate ./...
```
