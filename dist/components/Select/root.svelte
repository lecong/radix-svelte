<script context="module">import { useActions } from "../../internal/helpers";
const defaults = {
    open: false,
    value: void 0
};
const { getContext, setContext } = reactiveContext(defaults);
export const getSelectRootContext = getContext;
</script>

<script>import { Popper } from "../../internal/components";
import { reactiveContext } from "../../internal/helpers";
export let use = [];
export let value = void 0;
export let open = defaults.open;
export let name = "";
const ctx = setContext({ open: (v) => open = v, value: (v) => value = v });
$: ctx.set({ open, value });
</script>

<Popper.Root>
	<div {...$$restProps} use:useActions={use ?? []}>
		<slot />
		{#if name}
			<input type="hidden" {name} {value} />
		{/if}
	</div>
</Popper.Root>
