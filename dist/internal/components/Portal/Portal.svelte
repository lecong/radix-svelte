<script context="module">import { tick } from "svelte";
export function portal(el, target = "body") {
    let targetEl;
    async function update(newTarget) {
        target = newTarget;
        if (typeof target === "string") {
            targetEl = document.querySelector(target);
            if (targetEl === null) {
                await tick();
                targetEl = document.querySelector(target);
            }
            if (targetEl === null) {
                throw new Error(`No element found matching css selector: "${target}"`);
            }
        }
        else if (target instanceof HTMLElement) {
            targetEl = target;
        }
        else {
            throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
        }
        targetEl.appendChild(el);
        el.hidden = false;
    }
    function destroy() {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    update(target);
    return {
        update,
        destroy
    };
}
</script>

<script>export let target = "body";
</script>

<div use:portal={target} hidden>
	<slot />
</div>
