Vue.component('son', {
    template: //html
    `
    <div class="py-5 bg-success">

        <h4 >Son component</h4>
        <h5>{{number}}</h5>
    </div>
    `,
        // Props allow communication between components (father and son)
        props: ['number']
});