import Animation from '/dist/src/index.js';

const myAnimation = new Animation({
  frames: [
    ['hello', 'hell ', 'hel  ', 'he   ', 'h    '],
    ['hell ', 'hel  ', 'he   ', 'h    ', 'hello'],
    ['hel  ', 'he   ', 'h    ', 'hello', 'hell '],
    ['he   ', 'h    ', 'hello', 'hell ', 'hel  '],
    ['h    ', 'hello', 'hell ', 'hel  ', 'he   '],
  ],
  fps: 1,
  fontColor: 'rgb(210,200,230)',
  backgroundColor: 'rgb(230, 90, 140)',
});
myAnimation.create();
document.body.appendChild(myAnimation.div);
myAnimation.play();
console.log(myAnimation);
