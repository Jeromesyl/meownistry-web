
const settings = {
  "name": "meownistry-web",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "MEOWNISTRY OF MEOW",
      "description": "CAT FRIENDLY CO-WORKING"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
            ],
            [
              "About us",
            ],
            [
              "Our cats",
            ],
            [
              "Our rates",
            ],
            [
              "Rules",
            ],
            [
              "Contact us",
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:8888/wordpress/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
