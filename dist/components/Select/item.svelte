<script context="module">import { useActions } from "../../internal/helpers";
import { getSelectRootContext } from "./root.svelte";
</script>

<script>export let use = [];
export let value;
const rootCtx = getSelectRootContext();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => {
		$rootCtx.value = value;
		$rootCtx.open = false;
	}}
	{...$$restProps}
	use:useActions={use ?? []}
>
	<slot name="text" />
	{#if $rootCtx.value === value}
		<slot name="indicator" />
	{/if}
</div>
