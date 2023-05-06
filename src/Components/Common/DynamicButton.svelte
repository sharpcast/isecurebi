<script>
	import { createEventDispatcher } from 'svelte'
    export let btnName = "Button"
	const dispatch = createEventDispatcher()
</script>
<button on:click>{btnName}</button>