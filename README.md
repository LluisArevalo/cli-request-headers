## Management

### Install package

`npm install -g .`

### Uninstall package

`npm uninstall -g cli-request-headers`

## Usage

### Basic request

It returns all the Header parameters from the request:

`cli-request-headers -u https://olympics.com/en/olympic-games`

### Request specific prefix

It returns all the header keys that start with the specified prefix:

`cli-request-headers -u https://olympics.com/en/olympic-games -p x-`
