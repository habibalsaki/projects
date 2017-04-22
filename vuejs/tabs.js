Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div id="tab_panels">
            <slot></slot>
        </div>
    </div>
    `,

    data(){
        return {
            tabs: []
        }
    },

    created(){
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
            })
        }
    }

    
});

Vue.component('tab',{
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: {required: true},
        selected: {defaut: false}
    },

    data(){
        return {
            isActive: false
        }
    },

    mounted(){
        this.isActive = this.selected;
    },

    computed: {
        href(){
            return "#" + this.name.toLowerCase().replace(/ /g,'-');
        }
    }
    
});