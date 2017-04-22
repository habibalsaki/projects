Vue.component('message',{
    props: ['title','body'],
    template : `
        <article class="message is-primary" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="hideMsg"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    data(){
        return{
            isVisible : true
        }
    },
    methods: {
        hideMsg(){
            this.isVisible = false;
        }
    } 
});