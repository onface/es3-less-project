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
