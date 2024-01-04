import { SvelteComponent } from "svelte";
import { type CheckboxRootProps } from '..';
declare const __propDef: {
    props: {
        checked?: CheckboxRootProps['checked'];
        disabled?: CheckboxRootProps['disabled'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxTestProps = typeof __propDef.props;
export type CheckboxTestEvents = typeof __propDef.events;
export type CheckboxTestSlots = typeof __propDef.slots;
export default class CheckboxTest extends SvelteComponent<CheckboxTestProps, CheckboxTestEvents, CheckboxTestSlots> {
}
export {};
