<script context="module">"use strict";
</script>

<script>export let onMouseDown = void 0;
export let ref = void 0;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
	{...$$restProps}
	on:mousedown={(event) => {
		onMouseDown?.(event);
		// prevent text selection when double clicking label
		if (!event.defaultPrevented && event.detail > 1) {
			event.preventDefault();
		}
	}}
	bind:this={ref}
>
	<slot />
</label>
