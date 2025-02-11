import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        element: HTMLSpanElement;
    };
    events: {
        homeKeyDown: CustomEvent<KeyboardEvent>;
        endKeyDown: CustomEvent<KeyboardEvent>;
        stepKeyDown: CustomEvent<KeyboardEvent>;
        slideStart: CustomEvent<PointerEvent>;
        slideMove: CustomEvent<PointerEvent>;
        slideEnd: CustomEvent<PointerEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SliderImplProps = typeof __propDef.props;
export type SliderImplEvents = typeof __propDef.events;
export type SliderImplSlots = typeof __propDef.slots;
export default class SliderImpl extends SvelteComponent<SliderImplProps, SliderImplEvents, SliderImplSlots> {
}
export {};
