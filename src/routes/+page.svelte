<script lang="ts">
  import type { PageProps } from "./$types";
  import Loading from "./loading.svelte";

  let { data }: PageProps = $props();
</script>

<main class="flex flex-col justify-center items-center mt-5 gap-3">
  <h1 class="text-2xl">Todo</h1>
  {#await data.streamed.todos}
    <Loading />
  {:then todo}
    <h2>{todo.title}</h2>
  {:catch error}
    <p>{error.message}</p>
  {/await}
</main>
