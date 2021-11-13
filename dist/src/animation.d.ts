declare type Options = {
    fps?: number;
    frames: string[][];
    pixelStyles?: {
        [key: string]: string;
    }[][][] | any;
    div?: HTMLDivElement;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fontColor?: string;
    pixelWidth?: number;
    pixelHeight?: number;
    backgroundColor?: string;
};
declare class Animation {
    fps: number;
    pixelWidth: number;
    pixelHeight: number;
    pixelStyles: {
        [key: string]: any;
    }[][][] | undefined | any;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    fontColor: string;
    frames: string[][];
    backgroundColor: string;
    frameNodes: HTMLDivElement[];
    div: HTMLDivElement;
    playing: boolean;
    _frameNumber: number;
    _iteration: number;
    constructor(options: Options);
    create(): void;
    play(): void;
    stop(): void;
    pause(): void;
}
export default Animation;
