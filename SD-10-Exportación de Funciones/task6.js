export function rubricExcellent(calificacion) {
    if (calificacion > 8) {
        return "Excellent";
    } else {
        return "Pass";
    }
}