/*
Language: Eta
Requires: xml.js, javascript.js
Author: Ben Gubler <nebrelbug@gmail.com>
Contributors: Lucas Mazza <lucastmazza@gmail.com>
Description: Embedded templating language for JavaScript
Website: https://eta.js.org
Category: template
*/

export default function (hljs) {
  return {
    name: "Eta",
    subLanguage: "xml",
    contains: [
      {
        begin: "<%[-_]?\\s*?(~|=)?",
        end: "[-_]?%>",
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  }
}
