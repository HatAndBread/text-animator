import Animation from '/dist/src/index.js';

const myAnimation = new Animation({
  frames: [
    [
      '          ',
      '          ',
      '          ',
      '          ',
      '     *    ',
      '          ',
      '          ',
      '          ',
      '          ',
    ],
    [
      '          ',
      '          ',
      '          ',
      '    * *   ',
      '     *    ',
      '    * *   ',
      '          ',
      '          ',
      '          ',
    ],
    [
      '          ',
      '          ',
      '   *   *  ',
      '    * *   ',
      '   * * *  ',
      '    * *   ',
      '   *   *  ',
      '          ',
      '          ',
    ],
    [
      '          ',
      '  *     * ',
      '   *   *  ',
      '  * * * * ',
      ' * * * * *',
      '    * *   ',
      '   * * *  ',
      '  *     * ',
      '          ',
    ],
    [
      '*   - -  *',
      '  *  *  * ',
      '*  * * * *',
      '  * * * * ',
      ' * * * * *',
      '  * * * * ',
      '   * * *  ',
      '  * * * * ',
      ' * - + - *',
    ],
    [
      '          ',
      '  *     * ',
      '   *   *  ',
      '  * * * * ',
      ' * * * * *',
      '    * *   ',
      '   * * *  ',
      '  *     * ',
      '          ',
    ],
    [
      '          ',
      '          ',
      '   *   *  ',
      '    * *   ',
      '   * * *  ',
      '    * *   ',
      '   *   *  ',
      '          ',
      '          ',
    ],
    [
      '          ',
      '          ',
      '          ',
      '    * *   ',
      '     *    ',
      '    * *   ',
      '          ',
      '          ',
      '          ',
    ],
  ],
  fps: 57,
  fontColor: 'rgb(210,200,230)',
  backgroundColor: 'rgb(23, 190, 240)',
});

const myAnimation2 = new Animation({
  frames: [
    ['hello', 'hell ', 'hel  ', 'he   ', 'h    '],
    ['hell ', 'hel  ', 'he   ', 'h    ', 'hello'],
    ['hel  ', 'he   ', 'h    ', 'hello', 'hell '],
    ['he   ', 'h    ', 'hello', 'hell ', 'hel  '],
    ['h    ', 'hello', 'hell ', 'hel  ', 'he   '],
  ],
  fps: 57,
  fontColor: 'rgb(210,200,230)',
  backgroundColor: 'rgb(230, 90, 140)',
});

const myAnimation3 = new Animation({
  frames: [
    ['hello', 'hell ', 'hel  ', 'he   ', 'h    '],
    ['hell ', 'hel  ', 'he   ', 'h    ', 'hello'],
    ['hel  ', 'he   ', 'h    ', 'hello', 'hell '],
    ['he   ', 'h    ', 'hello', 'hell ', 'hel  '],
    ['h    ', 'hello', 'hell ', 'hel  ', 'he   '],
  ],
  pixelStyles: [
    [
      // frame 1
      [
        // row 1
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
      ],
      null, // row 5
      [
        // row 3
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
      ],
      null, // row 4
      [
        // row 5
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
      ],
    ],
    [
      // frame 2
      [
        // row 1
        { color: 'orange' },
        { color: 'orange' },
        { color: 'orange' },
        { color: 'orange' },
        { color: 'orange' },
      ],
      null,
      [
        // row 3
        { color: 'green' },
        { color: 'green' },
        { color: 'green' },
        { color: 'green' },
        { color: 'green' },
      ],
      null,
      [
        // row 5
        { color: 'purple' },
        { color: 'purple' },
        { color: 'purple' },
        { color: 'purple' },
        { color: 'purple' },
      ],
    ],
    [
      // frame 3
      [
        // row 1
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
      ],
      null,
      [
        // row 3
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
      ],
      null,
      [
        // row 5
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
      ],
    ],
    [
      // frame 4
      [
        // row 1
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
      ],
      null,
      [
        // row 3
        { backgroundColor: 'purple' },
        { backgroundColor: 'purple' },
        { backgroundColor: 'purple' },
        { backgroundColor: 'purple' },
        { backgroundColor: 'purple' },
      ],
      null,
      [
        // row 5
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'yellow' },
      ],
    ],
    [
      // frame 5
      [
        // row 1
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
        { backgroundColor: 'blue' },
      ],
      null,
      [
        // row 3
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
        { backgroundColor: 'red' },
      ],
      null,
      [
        // row 5
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
        { backgroundColor: 'green' },
      ],
    ],
  ],
  fps: 57,
  fontColor: 'rgb(210,200,230)',
  backgroundColor: 'rgb(230, 90, 140)',
});

const animations = [myAnimation, myAnimation2, myAnimation3];

animations.forEach((animation) => {
  animation.create();
  document.body.appendChild(animation.div);
});

const butts = [document.getElementById('butt1'), document.getElementById('butt2'), document.getElementById('butt3')];

butts.forEach((butt, i) => {
  butt.addEventListener('click', () => {
    if (butt.innerText === 'Play') {
      butt.innerText = 'Stop';
      animations[i].play();
      return;
    }
    butt.innerText = 'Play';
    animations[i].stop();
  });
});
