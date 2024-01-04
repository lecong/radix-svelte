<script>import { Progress } from "..";
export let max = 1;
export let value = 0;
</script>

<Progress.Root aria-label="basic progress" {max} {value}>
	<Progress.Indicator data-testid={'progress-indicator'}>X</Progress.Indicator>
</Progress.Root>
