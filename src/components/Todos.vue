<script setup lang="ts">
    import type { Todo } from "@/models/Todo"; 
    import { defineProps } from "vue"; 

    interface ITodosProps {
        todos: Todo[];
    }
    defineProps<ITodosProps>(); 
</script>