<script>import { Switch } from "..";
export let checked = false;
export let disabled = false;
</script>

<form>
	<Switch.Root
		data-testid="switch"
		aria-label="basic switch"
		{checked}
		{disabled}
		name="test-name"
		value="test-value"
		required
	>
		<Switch.Thumb data-testid={'switch-thumb'} />
	</Switch.Root>
</form>
