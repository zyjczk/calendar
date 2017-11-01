import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//注册，一般现在的语法.use都是在某个实例中注册另一个插件

const state={
    notes:[],
    activeNote:{}
}

const mutations={
    ADD_NOTE (state) {
        const newNote = {
        text: '新tip，请输入您要记载的项目',
        favorite: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },

    EDIT_NOTE (state, text) {
        
        state.activeNote.text = text
    },

    DELETE_NOTE (state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE (state, note) {
        
        state.activeNote = note
    }
}

const actions= {
        addNote(context) {
            context.commit("ADD_NOTE");
        },
        editNote(context,noteText) {
            context.commit("EDIT_NOTE",noteText);
        },
        deleteNote(context) {
            context.commit("DELETE_NOTE");
        },
        updateActiveNote(context,note) {
            
            context.commit("SET_ACTIVE_NOTE",note);
        },
        toggleFavorite(context) {
            context.commit("TOGGLE_FAVORITE");
        }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})