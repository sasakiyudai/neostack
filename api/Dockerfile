FROM golang:1.19

RUN mkdir /go/src/app

WORKDIR /go/src/app
ADD . /go/src/app

RUN go mod tidy
RUN go install github.com/cosmtrek/air@v1.40.4

CMD ["air", "-c", ".air.toml"]
