import {createStore} from 'vuex'

const store = createStore({
  state: {
    count: 5,
    userName: 'Aaron',
    age: 18,
    todos: [{
        id: 1,
        text: 'content1',
        done: true
    },
    {
        id: 2,
        text: 'content2',
        done: false
    }]
  },
  getters: {
    donetodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id: number) => {
        return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    addAge(state) {
        state.age += 1
    },
    add(state) {
        state.count += 2
    }
  },
  actions: {
    addCountAction(context) {
        context.commit('add')
    }
  }
})
export default store