<script lang="ts">
	import background from "$lib/images/bg-mobile-light.jpg";
  
	let todo = "";
  export let data;
  let form: HTMLFormElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      form.submit();
    }
  }
</script>

<img src={background} alt="background" />
<h1>Todo</h1>
<form bind:this={form} method="POST" action="?/addTodo">
	<input type="text" name="todo" on:keydown={handleKeyDown} bind:value={todo} placeholder="Create a new todo..." />
</form>
<div>
  {#each data.todos as item (item.id)}
    <p>{item.text}</p>
  {/each}
</div>
