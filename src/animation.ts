type Options = {
  fps?: number;
  frames: string[][];
  pixelStyles?: { [key: string]: string }[][][] | any;
  div?: HTMLDivElement;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  fontColor?: string;
  pixelWidth?: number;
  pixelHeight?: number;
  backgroundColor?: string;
};

class Animation {
  fps: number;
  pixelWidth: number;
  pixelHeight: number;
  pixelStyles: { [key: string]: any }[][][] | undefined | any;
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
  constructor(options: Options) {
    if (options.fps && options.fps > 60) options.fps = 60;
    if (options.fps && options.fps < 1) options.fps = 1;
    this.fps = 61 - (options.fps || 30);
    this.pixelWidth = options.pixelWidth || 30;
    this.pixelHeight = options.pixelHeight || 30;
    this.pixelStyles = options.pixelStyles;
    this.fontSize = options.fontSize || 30;
    this.fontStyle = options.fontStyle || '';
    this.fontFamily = options.fontFamily || '';
    this.fontColor = options.fontColor || '';
    this.backgroundColor = options.backgroundColor || '';
    this.frames = options.frames;
    this.div = options.div || document.createElement('div');
    this.frameNodes = [];
    this.playing = false;
    this._frameNumber = 0;
    this._iteration = 0;
  }
  create() {
    const baseStyle = {
      backgroundColor: this.backgroundColor,
      color: this.fontColor,
      width: 'fit-content',
    };
    this.div.innerHTML = '';
    _setElementStyle(this.div, baseStyle);
    for (let i = 0; i < this.frames.length; i++) {
      const frame = document.createElement('div');
      for (let j = 0; j < this.frames[i].length; j++) {
        const row = document.createElement('div');
        _setElementStyle(row, { display: 'flex' });
        frame.insertAdjacentElement('beforeend', row);
        for (let k = 0; k < this.frames[i][j].length; k++) {
          const pixel = document.createElement('div');
          pixel.innerText = this.frames[i][j][k];
          const pixelStyle = {
            width: `${this.pixelWidth}px`,
            height: `${this.pixelHeight}px`,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: `${this.fontSize}px`,
            fontFamily: this.fontFamily,
            fontStyle: this.fontStyle,
          };
          _setElementStyle(pixel, pixelStyle);
          if (this.pixelStyles && this.pixelStyles[i] && this.pixelStyles[i][j] && this.pixelStyles[i][j][k]) {
            _setElementStyle(pixel, this.pixelStyles[i][j][k]);
          }
          row.insertAdjacentElement('beforeend', pixel);
        }
      }
      this.frameNodes.push(frame);
    }
  }
  play() {
    if (this.playing) return;
    this.playing = true;
    const loop = () => {
      if (!(this._iteration % this.fps)) {
        if (this._frameNumber >= this.frameNodes.length) this._frameNumber = 0;
        this.div.innerHTML = '';
        this.div.insertAdjacentElement('beforeend', this.frameNodes[this._frameNumber]);
        this._frameNumber++;
        this._iteration = 1;
      }
      if (this.playing) {
        this._iteration++;
        window.requestAnimationFrame(loop);
      }
    };
    loop();
  }
  stop() {
    this.playing = false;
    this._iteration = 0;
    this._frameNumber = 0;
  }
  pause() {
    this.playing = false;
  }
}

const _setElementStyle = (el: HTMLDivElement, styleObject: { [key: string]: string }) => {
  Object.keys(styleObject).forEach((key) => {
    //@ts-ignore
    el.style[key] = styleObject[key];
  });
};

export default Animation;
