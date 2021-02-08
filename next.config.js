const withCSS = require('@zeit/next-css');


module.exports = withCSS ({
    publicRuntimeConfig:{
        APP_NAME : 'NeoGrammers',
        API_DEVELOPMENT : 'http://localhost:8000/api',
        API_PRODUCTION : 'https://protected-thicket-88416.herokuapp.com/api',
        PRODUCTION : true ,
        DISQUS_SHORTNAME : 'neogrammer',
        DOMAIN_PRODUCTION : 'https://test-neogrammer-a5ah3wf90.vercel.app/',
        DOMAIN_DEVELOPMENT : 'http://localhost:3000'

    }
});

// dlzyccdmlochalmm

// dlzyccdmlochalmm