// import {addNote,deleteNote,toggleFavorite} from '@/vuex/action.js'
import { mapActions } from 'vuex'
import router from '@/router/index'

export default {
    data(){
        return {
            show:'all'
        }
    },
    computed:{
        activeNote(){
            return this.$store.state.activeNote
        },
        notes(){
            return this.$store.state.notes
        },
        filteredNotes () {
            if (this.show === 'all'){
                
                return this.notes
            } else if (this.show === 'favorites') {
                return this.notes.filter(note => note.favorite)
            }
        }
    },
    methods: {
        // ...mapActions([
        //     'updateActiveNote'
        // ]),
        //疑问：即做处理又需要调用action的时候怎么写更好
        updateActiveNote:function(note){
            // this.updateActiveNote()
            this.$store.dispatch('updateActiveNote',note)
            this.$router.push({path:'/noteText'});        
        },
    }
}