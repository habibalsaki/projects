new Vue({
    el: '#root',
    data: {
        showModal : false,
        progressBar: 50
    },
    methods: {
        initModal(){
            this.showModal = true;
        }
    }
})