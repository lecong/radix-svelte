<script context="module">"use strict";
</script>

<script>import { Popper } from "../../internal/components";
import { isBrowser } from "../../internal/helpers";
import { onDestroy } from "svelte";
import { getTooltipProviderContext } from "./provider.svelte";
import { getTooltipRootContext } from "./root.svelte";
export let use = [];
const ctx = getTooltipRootContext();
const providerCtx = getTooltipProviderContext();
let isPointerDown = false;
let hasPointerMoveOpened = false;
const handlePointerUp = () => {
    isPointerDown = false;
};
onDestroy(() => {
    if (!isBrowser)
        return;
    document.removeEventListener("pointerup", handlePointerUp);
});
</script>

<Popper.Anchor
	as="button"
	aria-describedby={$ctx.open ? $ctx.contentId : undefined}
	data-state={$ctx.stateAttribute}
	bind:ref={$ctx.trigger}
	on:pointermove
	on:pointermove={(event) => {
		if (event.pointerType === 'touch') return;
		if (!hasPointerMoveOpened && !$providerCtx?.isPointerInTransit) {
			$ctx.onTriggerEnter();
			hasPointerMoveOpened = true;
		}
	}}
	on:pointerleave
	on:pointerleave={() => {
		$ctx.onTriggerLeave();
		hasPointerMoveOpened = false;
	}}
	on:pointerdown
	on:pointerdown={() => {
		if (!isBrowser) return;

		isPointerDown = true;
		document.addEventListener('pointerup', handlePointerUp, { once: true });
	}}
	on:focus
	on:focus={() => {
		if (isPointerDown) return;
		$ctx.onOpen();
	}}
	on:blur
	on:blur={() => {
		$ctx.onClose();
	}}
	on:click
	on:click={() => {
		$ctx.onClose();
	}}
	use={[...(use ?? [])]}
	{...$$restProps}
>
	<slot />
</Popper.Anchor>
