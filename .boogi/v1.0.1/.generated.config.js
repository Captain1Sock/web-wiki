module.exports = {
    "metadata": {
        "name": "web-wiki",
        "short_name": "web-wiki",
        "description": "A library of react, webdesign and css solutions to common questions.",
        "language": "en",
        "url": "http://localhost",
        "pathPrefix": "/",
        "gaTrackingId": null,
        "siteImage": null,
        "favicon": "/assets/favicon.png",
        "themeColor": "#0066cc"
    },
    "header": {
        "logo": "/assets/logo.png",
        "logoLink": "/",
        "helpUrl": "https://boogi.netlify.app/configuration/setting-up",
        "links": [],
        "enabled": true
    },
    "sidebar": {
        "enabled": true,
        "ignoreIndex": false,
        "forcedNavOrder": [],
        "expanded": [],
        "groups": [
            {
                "order": 1,
                "path": "/gettingstarted",
                "title": ":rocket: Getting Started"
            },
            {
                "order": 2,
                "path": "/css",
                "title": ":sparkles: CSS"
            },
            {
                "order": 3,
                "path": "/react",
                "title": ":rocket: React"
            },
            {
                "order": 4,
                "path": "/strivecloud",
                "title": ":cloud: strivecloud"
            }
        ],
        "links": [
            {
                "text": "BooGi",
                "link": "https://github.com/filipowm/boogi"
            }
        ],
        "poweredBy": {}
    },
    "pwa": {
        "manifest": {
            "name": "BooGi",
            "short_name": "BooGi",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "minimal-ui",
            "crossOrigin": "anonymous",
            "icon": "static/assets/logo.png",
            "description": "A library of react, webdesign and css solutions to common questions.",
            "cache_busting_mode": "none",
            "include_favicon": false,
            "lang": "en"
        },
        "enabled": true
    },
    "social": {
        "facebook": "",
        "github": "",
        "gitlab": "",
        "instagram": "",
        "linkedin": "",
        "mail": "",
        "gmail": "",
        "slack": "",
        "twich": "",
        "twitter": "",
        "youtube": ""
    },
    "features": {
        "editOnRepo": {
            "editable": true,
            "location": "http://localhost",
            "type": "github"
        },
        "search": {
            "enabled": true,
            "indexName": "docs",
            "algoliaAppId": null,
            "algoliaSearchKey": null,
            "algoliaAdminKey": null,
            "excerptSize": 20000,
            "engine": "localsearch",
            "placeholder": "Search...",
            "startComponent": "input",
            "debounceTime": 380,
            "snippetLength": 23,
            "hitsPerPage": 10,
            "showStats": true,
            "localSearchEngine": {
                "encode": "advanced",
                "tokenize": "full",
                "threshold": 2,
                "resolution": 30,
                "depth": 20
            },
            "pagination": {
                "enabled": true,
                "totalPages": 10,
                "showNext": true,
                "showPrevious": true
            }
        },
        "toc": {
            "show": true,
            "depth": 3
        },
        "previousNext": {
            "enabled": true,
            "arrowKeyNavigation": true
        },
        "scrollTop": true,
        "showMetadata": true,
        "propagateNetlifyEnv": true,
        "pageProgress": {
            "enabled": false,
            "excludePaths": [
                "/"
            ],
            "height": 3,
            "prependToBody": false,
            "color": "#A05EB5"
        },
        "mermaid": {
            "language": "mermaid",
            "theme": "dark",
            "options": {},
            "width": 300,
            "height": 300
        },
        "rss": {
            "enabled": false,
            "showIcon": true,
            "title": "My RSS feed",
            "copyright": "",
            "webMaster": "M",
            "managingEditor": "",
            "categories": [
                "GatsbyJS",
                "Docs"
            ],
            "ttl": "60",
            "matchRegex": "^/",
            "outputPath": "/rss.xml",
            "generator": "gidocs"
        },
        "darkMode": {
            "enabled": true,
            "default": false
        },
        "publishDraft": false,
        "fullScreenMode": {
            "enabled": false,
            "hideHeader": true,
            "hideToc": true,
            "hideSidebar": true
        }
    },
    "search": {
        "enabled": true,
        "startComponent": "input",
        "placeholder": "Search...",
        "pagination": {
            "enabled": false
        }
    }
};