export function rubricPerfect(calificacion) {
    calificacion = Number(calificacion);

    if (calificacion === 11) {
        return "Perfect";
    } else {
        return "Pass";
    }
}