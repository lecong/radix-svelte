import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        min: number;
        max: number;
        inverted: boolean;
    };
    events: {
        homeKeyDown: CustomEvent<any>;
        endKeyDown: CustomEvent<any>;
        slideStart: CustomEvent<{
            value: number;
        }>;
        slideMove: CustomEvent<{
            value: number;
        }>;
        slideEnd: CustomEvent<null>;
        stepKeyDown: CustomEvent<{
            event: KeyboardEvent;
            direction: number;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SliderVerticalProps = typeof __propDef.props;
export type SliderVerticalEvents = typeof __propDef.events;
export type SliderVerticalSlots = typeof __propDef.slots;
export default class SliderVertical extends SvelteComponent<SliderVerticalProps, SliderVerticalEvents, SliderVerticalSlots> {
}
export {};
