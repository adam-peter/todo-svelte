<script lang="ts">
	import background from "$lib/images/bg-mobile-light.jpg";

	let todo = "";
  let form: HTMLFormElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      form.submit();
    }
  }
</script>

<img src={background} alt="background" />
<h1>Todo</h1>
<form bind:this={form}>
	<input type="text" on:keydown={handleKeyDown} bind:value={todo} placeholder="Create a new todo..." />
</form>
<p>{todo}</p>
