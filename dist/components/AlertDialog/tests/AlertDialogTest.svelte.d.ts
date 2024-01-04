import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AlertDialogTestProps = typeof __propDef.props;
export type AlertDialogTestEvents = typeof __propDef.events;
export type AlertDialogTestSlots = typeof __propDef.slots;
export default class AlertDialogTest extends SvelteComponent<AlertDialogTestProps, AlertDialogTestEvents, AlertDialogTestSlots> {
}
export {};
