const withCSS = require('@zeit/next-css');


module.exports = withCSS ({
    publicRuntimeConfig:{
        APP_NAME : 'NeoGrammers',
        API_DEVELOPMENT : 'http://localhost:8000/api',
        PRODUCTION : false ,
        DISQUS_SHORTNAME : 'neogrammer',
        DOMAIN_PRODUCTION : 'something.com',
        DOMAIN_DEVELOPMENT : 'http://localhost:3000'

    }
});

// dlzyccdmlochalmm

// dlzyccdmlochalmm