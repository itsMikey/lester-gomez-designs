const path = require('path');
const webpack = require('webpack');

module.exports = {
    webpack: (config) => {
        const baseUrl = '/src';
        config.resolve.alias['@Components'] = path.resolve(`${__dirname}${baseUrl}/components`);
        config.resolve.alias['@Styles'] = path.resolve(`${__dirname}${baseUrl}/styles`);
        config.resolve.alias['@Common'] = path.resolve(`${__dirname}${baseUrl}/common`);
        config.resolve.alias['@Interfaces'] = path.resolve(`${__dirname}${baseUrl}/common/interfaces`);
        config.resolve.alias['@Services'] = path.resolve(`${__dirname}${baseUrl}/services`);
        config.resolve.alias['@Contexts'] = path.resolve(`${__dirname}${baseUrl}/contexts`);
        config.resolve.alias['@Hooks'] = path.resolve(`${__dirname}${baseUrl}/hooks`);
        config.resolve.alias['@Utils'] = path.resolve(`${__dirname}${baseUrl}/utils`);
        config.resolve.alias['@Models'] = path.resolve(`${__dirname}${baseUrl}/models`);
        config.resolve.alias['@Test'] = path.resolve(`${__dirname}/test`);

        return config;
    },
}