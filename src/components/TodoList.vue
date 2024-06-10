<script setup lang="ts">
import { Todo } from '@/models/Todo'; 
import { ref } from 'vue';

const colors = ['#d9d968', '#80e0cb', '#d09ef0', '#db8faf'];
const completedColor = '#00ff33'; 
let colorIndex = 0; 

const addTodo = () => {
    todos.value.push(new Todo(todoText.value, colors[colorIndex], completedColor)); 
    todoText.value = ""; 

    colorIndex = (colorIndex + 1) % colors.length; 
};

const handleInput = (e: any) => {
    todoText.value = e.target.value; 
};

const toggleTodo = (i: number) => {
    todos.value[i].done = !todos.value[i].done; 
}
const removeTodo = (i: number) => {
    todos.value.splice(i, 1); 
}; 

const todos = ref<Todo[]>([]); 
const todoText = ref(""); 
</script>

<template>
    <section class="todo-list-section">
        <div>
            <input type="text" :value="todoText" @input="handleInput" />
            <button @click="addTodo">Spara</button>
        </div>

        <ul>
            <li v-for="(todo, i) in todos" :key="todo.id" :style="{ backgroundColor: todo.done ? todo.completedColor : todo.color  }">
                <span :class="todo.done ? 'done' : ''">{{  todo.text }}</span>
                <div class="button-container">
                    <button @click="() => toggleTodo(i)">Klar</button>
                    <button @click="() => removeTodo(i)">Ta bort</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.todo-list-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem; 
    height: 100vh; 
}
ul {
    list-style: none;
    padding: 0; 
    margin: 0; 
    display: flex; 
    flex-direction: column;
    gap: 0.5rem; 
}
li {
    color: black; 
   /*  border: 1px solid hotpink;  */
    max-width: 400px; 
    display: flex;
    justify-content: space-between;
    gap: 5rem; 
}
li > span.done {
    text-decoration: line-through;
}
.button-container {
    display: flex; 
    gap: 1rem; 
}

button {
    width: 80px; 
    height: 32px;
    border-radius: 20px;
    background-color: rgb(238, 255, 249);
    border-style: none;
    cursor: pointer;
}

button:hover {
    background-color: rgb(239, 199, 136);
}
</style>