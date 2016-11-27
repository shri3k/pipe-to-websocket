# pipe-to-websocket | [![Build Status](https://travis-ci.org/shri3k/pipe-to-websocket.svg?branch=master)](https://travis-ci.org/shri3k/pipe-to-websocket) [![Coverage Status](https://coveralls.io/repos/github/shri3k/pipe-to-websocket/badge.svg?branch=master)](https://coveralls.io/github/shri3k/pipe-to-websocket?branch=master)

## Description:
Takes the standard input and pipes it to websocket to be used

## Install:
```sh
npm install -g pipe-to-websocket
```

## Usage: 
```sh
tail -f /var/log/nginx/error.log | p2w
```

### Config
Default port that websocket listens to is `8090` but can be configured as 

```sh
tail -f /var/log/nginx/error.log | SOCKET_PORT=8088 p2w
```


## Example:
A client example is in `client/index.html` showing how to use it.
