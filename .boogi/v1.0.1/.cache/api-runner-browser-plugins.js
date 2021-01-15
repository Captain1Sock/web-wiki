module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-loadable-components-ssr/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-instagram-embed/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-pinterest/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/kevinvannimmen/Desktop/StriveCloud/kevin/web-wiki/.boogi/v1.0.1/src/templates/docs.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"remarkPlugins":[null,null],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-mermaid","options":{"language":"mermaid","theme":"dark","viewport":{"width":300,"height":300},"mermaidOptions":{}}},"gatsby-remark-graphviz",{"resolve":"/Users/kevinvannimmen/Desktop/StriveCloud/kevin/web-wiki/.boogi/v1.0.1/plugins/gatsby-remark-sectionize-toc/index.js","options":{"maxDepth":3}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1050,"quality":75,"showCaptions":true,"disableBgImageOnAlpha":true,"withWebp":true}},"gatsby-remark-copy-linked-files",{"resolve":"gatsby-remark-jargon","options":{"jargon":{"web-wiki":"<span><b>web-wiki</b> - web-wiki</span> A library of react, webdesign and css solutions to common questions."}}},{"resolve":"gatsby-remark-embed-snippet","options":{"directory":"/Users/kevinvannimmen/Desktop/StriveCloud/kevin/web-wiki/.boogi/v1.0.1/snippets/"}},{"resolve":"gatsby-remark-embedder","options":{"customTransformers":[],"services":{}}}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"http://localhost","stripQueryString":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"BooGi","short_name":"BooGi","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"minimal-ui","crossOrigin":"anonymous","icon":"static/assets/logo.png","description":"A library of react, webdesign and css solutions to common questions.","cache_busting_mode":"none","include_favicon":false,"lang":"en","legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"appendScript":"/Users/kevinvannimmen/Desktop/StriveCloud/kevin/web-wiki/.boogi/v1.0.1/src/custom-sw-code.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
