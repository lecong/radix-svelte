<script>import { Checkbox } from "..";
export let checked = false;
export let disabled = false;
</script>

<Checkbox.Root
	aria-label="basic checkbox"
	{checked}
	{disabled}
	name="test-name"
	value="test-value"
	required
>
	<Checkbox.Indicator data-testid={'checkbox-indicator'}>X</Checkbox.Indicator>
</Checkbox.Root>
