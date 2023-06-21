import {getRandomFotos} from './get-random-fotos.js';
import {makeFotos} from './make-fotos.js';
import {FOTOS_AMOUNT} from './data.js';

getRandomFotos(FOTOS_AMOUNT);
console.log('getRandomFotos', getRandomFotos(FOTOS_AMOUNT));

makeFotos(FOTOS_AMOUNT);
console.log('makeFotos', makeFotos(FOTOS_AMOUNT));
