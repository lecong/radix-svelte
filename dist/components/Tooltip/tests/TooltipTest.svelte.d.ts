import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TooltipTestProps = typeof __propDef.props;
export type TooltipTestEvents = typeof __propDef.events;
export type TooltipTestSlots = typeof __propDef.slots;
export default class TooltipTest extends SvelteComponent<TooltipTestProps, TooltipTestEvents, TooltipTestSlots> {
}
export {};
