# Regla de Divisibilidad por 13

## Introducción

De Wikipedia:

"Una regla de divisibilidad es una forma abreviada de determinar si un número entero dado es divisible por un divisor fijo sin realizar la división, generalmente examinando sus dígitos."

## Explicación del Método

Cuando divides las potencias sucesivas de 10 por 13, obtienes los siguientes restos de las divisiones enteras:

1, 10, 9, 12, 3, 4 porque:

10 ^ 0 -> 1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 -> 9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 -> 3 (mod 13)
10 ^ 5 -> 4 (mod 13)
(Para "mod" puedes ver: https://en.wikipedia.org/wiki/Modulo_operation)

Luego, todo el patrón se repite. Por lo tanto, se utiliza el siguiente método:

### Pasos del Método

1. Multiplica el dígito más a la derecha del número por el número más a la izquierda en la secuencia mostrada arriba.
2. Multiplica el segundo dígito más a la derecha por el segundo dígito más a la izquierda de la secuencia.
3. El ciclo continúa y sumas todos estos productos.
4. Repite este proceso hasta que la secuencia de sumas sea estacionaria.

## Ejemplo

¿Cuál es el resto cuando 1234567 se divide por 13?

7 6 5 4 3 2 1 (dígitos de 1234567 desde la derecha)
× × × × × × × (multiplicación)
1 10 9 12 3 4 1 (la secuencia que se repite)

Por lo tanto, siguiendo el método obtenemos:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

Repetimos el proceso con el número 178:

8x1 + 7x10 + 1x9 = 87

y de nuevo con 87:

7x1 + 8x10 = 87

A partir de ahora la secuencia es estacionaria (siempre obtenemos 87) y el resto de 1234567 por 13 es el mismo que el resto de 87 por 13 (es decir, 9).

## Tarea

Llama `thirt` a la función que procesa esta secuencia de operaciones en un número entero n (>=0). `thirt` devolverá el número estacionario.

- `thirt(1234567)` calcula 178, luego 87, luego 87 y devuelve 87.
- `thirt(321)` calcula 48, 48 y devuelve 48
