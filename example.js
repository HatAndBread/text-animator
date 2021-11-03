import Animation from '/dist/src/index.js';

const myAnimation = new Animation({
  frames: [
    ['hello', ' ell ', '  l  ', ' ell ', 'hello'],
    ['*****', ' *** ', '  *  ', ' *** ', '*****'],
  ],
});
myAnimation.create();
document.body.appendChild(myAnimation.node);
myAnimation.play();
console.log(myAnimation);
