Vue.component('son', {
    template: //html
    `
    <div class="py-5 bg-success">

        <h4 >Son component</h4>
        <h5>{{number}}</h5>
        <h4>Name: {{name}}</h4>
    </div>
    `,
        // Props allow communication between components (father and son)
        props: ['number'],
        data(){
            return{
             name: 'David'   
            }
        },
        mounted(){
            this.$emit('sonName', this.name);

        }
});