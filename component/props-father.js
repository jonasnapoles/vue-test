Vue.component("father", {

  template:   //html 
    `
    <div class="p-5 bg-dark text-white">
    <h2>Father component: {{fatherNumber}}</h2>
    <button class="btn btn-danger" @click="fatherNumber++">+</button>
    {{nameFather}}
    <son :number="fatherNumber" @sonName="nameFather = $event">Son component</son>
    
    </div>
    `,
    data(){
        return{
            fatherNumber: 0,
            nameFather: ''
        }
    }


});
