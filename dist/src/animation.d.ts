declare type Options = {
    fps?: number;
    frames: string[][];
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    pixelWidth?: number;
    pixelHeight?: number;
};
declare class Animation {
    fps: number;
    pixelWidth: number;
    pixelHeight: number;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    frames: string[][];
    frameNodes: HTMLDivElement[];
    node: HTMLDivElement;
    playing: boolean;
    constructor(options: Options);
    create(): void;
    play(): void;
    stop(): void;
    pause(): void;
}
export default Animation;
