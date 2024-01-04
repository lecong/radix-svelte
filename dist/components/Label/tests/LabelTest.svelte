<script>import { Label } from "..";
import { constants } from "./constants";
</script>

<Label.Root data-testid={constants.labelDataTestId} aria-label="basic label" for={constants.inputId}
	>Label text</Label.Root
>
<input type="text" id={constants.inputId} />
