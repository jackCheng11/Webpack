module.exports = function(api){
    api.cache(true);

    presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    ie: 8
                }
            }
        ]
    ]

    plugins = [];
    return {
        presets,
        plugins
    }
}