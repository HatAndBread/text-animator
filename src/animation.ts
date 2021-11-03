type Options = {
  fps?: number;
  frames: string[][];
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  pixelWidth?: number;
  pixelHeight?: number;
};

class Animation {
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
  constructor(options: Options) {
    if (options.fps && options.fps > 60) options.fps = 60;
    if (options.fps && options.fps < 1) options.fps = 1;
    this.fps = 61 - (options.fps || 30);
    this.pixelWidth = options.pixelWidth || 30;
    this.pixelHeight = options.pixelHeight || 30;
    this.fontSize = options.fontSize || 30;
    this.fontStyle = options.fontStyle || '';
    this.fontFamily = options.fontFamily || 'monospace';
    this.frames = options.frames;
    this.node = document.createElement('div');
    this.frameNodes = [];
    this.playing = false;
  }
  create() {
    const animationStyle = {
      //position: 'fixed',
    };
    _setElementStyle(this.node, animationStyle);
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
          row.insertAdjacentElement('beforeend', pixel);
        }
      }
      this.frameNodes.push(frame);
    }
  }
  play() {
    this.playing = true;
    let frameNumber = 0;
    let i = 1;
    const loop = () => {
      if (!(i % this.fps)) {
        if (frameNumber >= this.frameNodes.length) frameNumber = 0;
        this.node.innerHTML = '';
        this.node.insertAdjacentElement('beforeend', this.frameNodes[frameNumber]);
        frameNumber++;
        i = 1;
      }
      if (this.playing) {
        i++;
        window.requestAnimationFrame(loop);
      }
    };
    loop();
  }
  stop() {}
  pause() {}
}

const _setElementStyle = (el: HTMLDivElement, styleObject: { [key: string]: string }) => {
  Object.keys(styleObject).forEach((key) => {
    //@ts-ignore
    el.style[key] = styleObject[key];
  });
};

export default Animation;
