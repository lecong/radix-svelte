<script context="module">import { useActions } from "../../helpers";
import { getRootContext } from "./root.svelte";
</script>

<script>export let use = [];
export let as = "div";
export let ref = null;
let element;
$: if (element)
    ref = element;
const rootContext = getRootContext();
$: $rootContext.anchor = element;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	{...$$restProps}
	use:useActions={use ?? []}
	bind:this={element}
	on:click
	on:pointerenter
	on:pointermove
	on:pointerleave
	on:pointerdown
	on:focus
	on:blur
	on:touchstart
>
	<slot />
</svelte:element>
