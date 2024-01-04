<script>import { Slider } from "../../..";
</script>

<form>
	<Slider.Root
		data-testid="slider-root"
		{...$$restProps}
		style="width:100px; height:100px; display:flex; position: relative"
	>
		<Slider.Track style="flex-grow:1">
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb
			data-testid="slider-thumb"
			aria-label="slider-test"
			style="width:10px; height:10px">X</Slider.Thumb
		>
	</Slider.Root>
</form>
