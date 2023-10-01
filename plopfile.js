// plop.setGenerator('React component generator', {
//     description: 'A generator for React components',
//     prompts: [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Component name',
//         },
//     ],
// });
plop.setGenerator('React component generator', {

    description: 'A generator for React components',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name',
        },
    ],
    actions: [
        {
            type: 'add',
            path: 'src/{{name}}/index.jsx',
            base: `plop-templates/react-component/`,
            templateFiles: 'plop-templates/react-component/*',
        },
    ],

});
// Helpers
plop.setHelper('toLowerCase', function (text) {
    return text.toLowerCase();
});