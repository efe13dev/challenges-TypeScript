# Calculadora de Inversión de Mr. Scrooge 💰

## Descripción del Problema

Mr. Scrooge tiene una suma de dinero 'P' que desea invertir. Antes de hacerlo, quiere saber cuántos años 'Y' necesita mantener esta suma 'P' en el banco para alcanzar una suma deseada 'D'.

### Condiciones
- La suma se mantiene durante 'Y' años en el banco
- El interés 'I' se paga anualmente
- Después de pagar impuestos 'T' del año, la nueva suma se reinvierte

> **Nota sobre Impuestos:** No se grava el principal invertido, sino solo el interés acumulado del año

## Ejemplo

### Datos Iniciales
```
Principal (P) = 1000.00
Tasa de Interés (I) = 0.05
Tasa de Impuestos (T) = 0.18
Suma Deseada (D) = 1100.00
```

### Progresión Anual
1. **Después del 1er Año:**
   - P = 1041.00
2. **Después del 2do Año:**
   - P = 1083.86
3. **Después del 3er Año:**
   - P = 1128.30

### Conclusión
Por lo tanto, Mr. Scrooge debe esperar **3 años** para que el principal inicial alcance la suma deseada.

## Tarea
Su tarea es completar el método proporcionado y devolver el número de años 'Y' como un número entero para que Mr. Scrooge obtenga la suma deseada.

### Suposición
Se supone que la suma deseada 'D' es siempre mayor que el principal inicial. Sin embargo, es recomendable considerar que si la suma deseada 'D' es igual al principal 'P', esto debería devolver 0 años.
