/* 

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es 
igual al máximo valor que se puede obtener en Javascript

*/

let leng = 158;

let m_leng = 15.8;

let k_leng = 1.58;

let round_leng = Math.round(m_leng);

let floor_leng = Math.floor(k_leng);

let comp_numbers = m_leng === k_leng ? true : false;

console.log(`Mi altura es ${leng}. In mts, ${m_leng} & kms, ${k_leng}`);

console.log(`Value: ${m_leng} -> Rounded to ${round_leng}`);

console.log(`Value: ${k_leng} -> Floored to ${floor_leng}`);

console.log(`Are values the same? ${comp_numbers}`);
