export function ipToInt32(ip: string): number {
  // Dividir la IP en octetos
  const octetos = ip.split('.');

  // Convertir cada octeto a su valor binario y desplazarlo a la posición correcta
  return (
    octetos.reduce(
      (total, octeto, index) => total + (parseInt(octeto) << (24 - index * 8)),
      0
    ) >>> 0
  );
  // >>> 0 asegura un entero sin signo de 32 bits
}
