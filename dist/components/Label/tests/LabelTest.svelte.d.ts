import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LabelTestProps = typeof __propDef.props;
export type LabelTestEvents = typeof __propDef.events;
export type LabelTestSlots = typeof __propDef.slots;
export default class LabelTest extends SvelteComponent<LabelTestProps, LabelTestEvents, LabelTestSlots> {
}
export {};
