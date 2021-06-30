## Development

### Install package

`npm install -g .`

### Uninstall package

`npm uninstall -g cli-request-headers`

## Usage

### Basic request

It returns all the Header parameters from the request:

`cli-request-headers -u https://olympics.com/en/olympic-games`

Output:

```
Status Code: 200
content-type:
etag:
cache-control:
date:
transfer-encoding:
connection:
access-control-max-age:
access-control-allow-credentials:
access-control-allow-headers:
access-control-allow-methods:
access-control-allow-origin:
x-ocs-country-gid:
referrer-policy:
x-content-type-options:
strict-transport-security:
```

### Request specific prefix

It returns all the header keys that start with the specified prefix:

`cli-request-headers -u https://olympics.com/en/olympic-games -p x-`

Output:

```
Status Code: 200
x-ocs-country-gid:
x-content-type-options:
```
