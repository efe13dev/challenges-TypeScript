function rank(st, we, n) {
    // Si no hay participantes, devuelve "No participants"
    if (st.length === 0) {
        return 'No participants';
    }
    // Si el rango solicitado es mayor que el número de participantes, devuelve "Not enough participants"
    if (n > st.split(',').length) {
        return 'Not enough participants';
    }
    // Define el alfabeto en minúsculas para calcular el rango de las letras
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Divide la cadena de nombres en un array de nombres
    var names = st.split(',');
    // Crea un array para almacenar los "som" de cada participante
    var som = [];
    // Itera sobre cada nombre en el array de nombres
    for (var i = 0; i < names.length; i++) {
        // Inicializa la suma del "som" con la longitud del nombre
        var sum = names[i].length;
        // Itera sobre cada letra del nombre
        for (var j = 0; j < names[i].length; j++) {
            // Suma el rango de la letra (en minúsculas) al "som"
            sum += alphabet.indexOf(names[i][j].toLowerCase()) + 1;
        }
        // Multiplica el "som" por el peso correspondiente y lo agrega al array de "som"
        som.push(sum * we[i]);
    }
    // Crea un nuevo array de objetos con el nombre y el "som" de cada participante
    var result = names
        .map(function (name, index) { return ({ name: name, som: som[index] }); })
        // Ordena el array de participantes por "som" descendente y alfabéticamente en caso de empate
        .sort(function (a, b) {
        if (a.som === b.som) {
            return a.name.localeCompare(b.name);
        }
        return b.som - a.som;
    })
        // Extrae solo los nombres del array de participantes ordenados
        .map(function (obj) { return obj.name; });
    // Devuelve el nombre del participante en el rango especificado
    return result[n - 1];
}
