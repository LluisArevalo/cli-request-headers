const https = require("https");

const request = (url, prefix, messages) => {
  https
    .get(url, (res) => {
      messages.showSuccess(`Status Code: ${res.statusCode}`);

      const responseKeys =
        prefix.length === 0
          ? Object.keys(res.headers)
          : Object.keys(res.headers).filter((key) => key.startsWith(prefix));

      responseKeys.forEach((responseKey) =>
        messages.showInfo(`${responseKey}: ${res.headers[responseKey]}`)
      );
    })
    .on("error", (err) => {
      messages.showError(err);
    });
};

module.exports = { request };
