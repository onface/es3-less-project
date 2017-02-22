var componentname = function (name) {
    name = name.replace(/react/g,'').replace(/(_|-)/g, '').replace(/\..*$/,'')
    if (name.length === 0) {
        name = 'some'
    }
    var capitalizeName = name[0].toUpperCase() + name.slice(1)
    return capitalizeName
}
module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name'
        }
    },
    completeMessage: "To get started:\n\n  cd {{destDirName}}/src\n  npm install --registry=https://registry.npm.taobao.org # or yarn\n  npm run dev\n  npm run s\n\nDocumentation can be found at {{ destDirName }}/src/README.md"
}
