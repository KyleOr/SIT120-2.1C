const app = Vue.createApp({
    data() {
      return {
        newTodo: '',
        todos: [],
        priorities: ['⏳', '⚠️', '🚨'], // Define priority levels
        selectedPriority: '⏳', 
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() === '') return;
        this.todos.push({
          text: this.newTodo,
          completed: false,
          priority: this.selectedPriority, // Add priority to the task
        });
        this.newTodo = '';
      },
      removeTodo(index, priority) {
        this.todos.splice(index, 1);
       
      }
    },
    computed: {
        sortedTodos() {
          const sorted = [];
          const priorityOrder = ['🚨', '⚠️', '⏳']; 
          for (const priority of priorityOrder) {
            sorted.push(...this.todos.filter(todo => todo.priority === priority));
          }
          return sorted;
        },
      },
      
  });
  
  app.mount('#app');
  