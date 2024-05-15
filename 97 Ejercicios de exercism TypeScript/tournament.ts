// Definición de los puntajes por defecto para cada equipo
const DEFAULT_SCORES = { mp: 0, w: 0, d: 0, l: 0, p: 0 };

// Tipo para representar el puntaje de un equipo
type Score = typeof DEFAULT_SCORES;

// Función para formatear un número agregando ceros a la izquierda si es necesario
const formatNumber = (number: number) => number.toString().padStart(2, ' ');

export class Tournament {
  public tally(input: string): string {
    // Línea inicial de la tabla de clasificación
    const lines = ['Team                           | MP |  W |  D |  L |  P'];

    // Dividir la entrada en líneas, filtrar las líneas vacías y dividir cada línea en sus partes
    const inputs = input
      .split('\n')
      .filter(Boolean)
      .map((l) => l.split(';'));

    // Objeto para almacenar los puntajes de cada equipo
    const map: Record<string, Score> = {};

    // Iterar sobre cada partido y actualizar los puntajes
    for (const [first, second, result] of inputs) {
      // Inicializar los puntajes de los equipos si no existen
      map[first] ??= { ...DEFAULT_SCORES };
      map[first].mp += 1; // Incrementar el número de partidos jugados

      map[second] ??= { ...DEFAULT_SCORES };
      map[second].mp += 1; // Incrementar el número de partidos jugados

      // Actualizar los puntajes según el resultado del partido
      if (result === 'draw') {
        map[first].d += 1; // Incrementar el número de empates
        map[second].d += 1; // Incrementar el número de empates
        map[first].p += 1; // Sumar un punto
        map[second].p += 1; // Sumar un punto
      } else {
        const [winner, loser] = result === 'win' ? [first, second] : [second, first];
        map[winner].w += 1; // Incrementar el número de victorias
        map[winner].p += 3; // Sumar tres puntos por la victoria
        map[loser].l += 1; // Incrementar el número de derrotas
      }
    }

    // Ordenar los equipos según los puntos (en orden descendente) y el nombre del equipo (en orden ascendente)
    const results = Object.entries(map).sort(([n1, s1], [n2, s2]) => (s1.p !== s2.p ? s2.p - s1.p : n1 < n2 ? -1 : 1));

    // Generar las líneas de la tabla de clasificación
    for (const [team, score] of results) {
      lines.push(
        [
          team.padEnd(30, ' '), // Alinear el nombre del equipo a la izquierda con un ancho de 30 caracteres
          formatNumber(score.mp), // Formatear el número de partidos jugados
          formatNumber(score.w), // Formatear el número de victorias
          formatNumber(score.d), // Formatear el número de empates
          formatNumber(score.l), // Formatear el número de derrotas
          formatNumber(score.p), // Formatear el número de puntos
        ].join(' | '), // Unir los elementos con un separador '|'
      );
    }

    // Devolver la tabla de clasificación como una cadena
    return lines.join('\n'); // Unir las líneas con un salto de línea
  }
}
