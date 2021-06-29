#!/usr/bin/env node

const messages = require("./utils/messages");
const { options } = require("./utils/args");
const { request } = require("./utils/requests");

const { url, prefix = "" } = options;
request(url, prefix, messages);
