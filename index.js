const fs = require("fs");

const folder = ["css", "sass", "src"];
const nameSass = ["base", "components"];
const Sass = [];

const content = "";
const mainSass = `@import "base/base";
@import "components/components";`;

// const useStrict = `'use strict';`;

const indexHtml = `<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title></title>

<body style="Margin:0;padding:0;min-width:100%;">


</body>

</html>`;

nameSass.forEach((el) => {
  Sass.push(`sass/${el}`);
});

const join = folder.concat(Sass);

join.forEach((el) => {
  try {
    if (!fs.existsSync(`${__dirname}/${el}`)) {
      fs.mkdirSync(`${__dirname}/${el}`);
    }
  } catch (err) {
    console.error(err);
  }
});

fs.writeFileSync(`index.html`, indexHtml);

fs.writeFileSync(`sass/main.scss`, mainSass);

fs.writeFileSync(`sass/base/_base.scss`, content);
fs.writeFileSync(`sass/components/_components.scss`, content);
