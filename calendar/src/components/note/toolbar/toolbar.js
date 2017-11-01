// import {addNote,deleteNote,toggleFavorite} from '@/vuex/action.js'
import { mapActions } from 'vuex'

export default {
    computed:{
        activeNote(){
            return this.$store.state.activeNote
        }
    },
    methods: {
        ...mapActions([
            'addNote','toggleFavorite','deleteNote'
        ]),
    }
}

// //这里是获得state中的属性，getter可以叫做计算属性，其主要的用途是当state中的属性页面需要临时计算或修改时，放入其中而不是直接修改原store
//     computed:{
//         activeNote:function(state){
//             return state.activeNote
//         }
//     },
//     methods: {
//         addNote(){
//             this.$store.dispatch("addNote");
//         },
//         toggleFavorite() {
//             this.$store.dispatch("toggleFavorite")
//         }
//     }