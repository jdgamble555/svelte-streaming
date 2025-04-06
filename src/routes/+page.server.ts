import type { PageServerLoad } from "./$types";

type Todo = {
    title: string
};

const getTodo = async () => {
    const randomTodo = Math.floor(Math.random() * 200) + 1;
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${randomTodo}`)
        .then(r => r.json()) as Todo;
};

export const load: PageServerLoad = () => {
    return {
        todos: getTodo()
    };
};