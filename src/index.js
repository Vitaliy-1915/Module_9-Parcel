import Typed from 'typed.js';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 

import add from './js/add';
// import calc from './js/calc';
// import { mult, sub } from './js/calc';
import * as ALL from './js/calc';

import './sass/main.scss';

new Typed('.js-typed-text', {
  strings: ["First sentence.", "Second sentence."],
    typeSpeed: 50,
  strings: ['This is a JavaScript library', 'This is an ES6 module'],
  smartBackspace: true // Default value
});

      tippy('#myButton', {
        content: 'My tooltip!',
        //  trigger: 'click',
      });

// console.log(add(5, 5));

// console.log(calc.mult(5, 5));
// console.log(calc.sub(5, 5));
// console.log(mult(5, 5));
// console.log(sub(5, 5));
// console.log(ALL);


