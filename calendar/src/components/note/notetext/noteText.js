// import {addNote,deleteNote,toggleFavorite} from '@/vuex/action.js'
import { mapActions,mapState } from 'vuex'
import footerSave from '@/components/footer/footerSave.vue'

export default {
    data (){
        return {
            text:''
        }
    },
    computed:{
        ...mapState(['activeNote'])
    },
    methods: {
        ...mapActions([ 
            'editNote'
        ]),
        // ceshi:function(){
        //     console.log()
        //     debugger
        // }
    },
    
    components:{
        footerSave
    }
}