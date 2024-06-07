<script setup lang="ts">
import { Todo } from '@/models/Todo'; 
import { ref } from 'vue';

const addTodo = () => {
    todos.value.push(new Todo(todoText.value)); 
    todoText.value = ""; 
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
    <div>
        <input type="text" :value="todoText" @input="handleInput" />
        <button @click="addTodo">Spara</button>
    </div>

    <ul>
        <li v-for="(todo, i) in todos" :key="todo.id">
            <span :class="todo.done ? 'done' : ''">{{  todo.text }}</span>
            <button @click="() => toggleTodo(i)">Klar</button>
            <button @click="() => removeTodo(i)">Ta bort</button>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0; 
    margin: 0; 
}
li > span.done {
    text-decoration: line-through;
}
</style>