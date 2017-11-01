import Toolbar from '@/components/note/toolbar/toolbar.vue'
import noteList from '@/components/note/notelist/noteList.vue'
import footerSelf from "@/components/footer/footer.vue"

export default {
    //这里是注册记事本页面中的各个组件，注册后就可以在note.vue中使用了
    components:{
        Toolbar,
        noteList,
        footerSelf
    }
}