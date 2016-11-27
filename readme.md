# pipe-to-websocket

## Description:
Takes the standard input and pipes it to websocket to be used

## Install:
```sh
npm install pipe-to-websocket
```

## Usage: 
```sh
tail -f /var/log/nginx/error.log | p2w
```

**Config**
Default port that websockt listens to is `8090` but can be configured as 

```sh
tail -f /var/log/nginx/error.log | SOCKET_PORT=8088 p2w
```


## Example:
A client example is in `client/index.html` showing how to use it.
