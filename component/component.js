Vue.component('greeting', {
    // The component will alway have a template
    // template: '<h1>{{greeting}}</h1>',
    //Literal templates **  `` **
    //Whenever we use Template, we have to wrap everything inside a container(Exp. indide a div)
    template: //html
        `
    <div>
    <h1>{{greeting}}</h1>
    <h3>It is incredible to learn Vue</h3>
    <h4>Vue is the best tool to work, it's wonderful!</h4>
    </div>
    `,
    //This is a function
    data() {
        return {
            greeting: "Hello there! Today is a lovely day"
        }
    }

});