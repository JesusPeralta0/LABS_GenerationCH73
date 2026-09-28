export function ageCalculator(anio,mes,dia) {
 const today = new Date();
 let age = today.getFullYear() - anio
 if (
        today.getMonth() + 1 < mes||
        (today.getMonth() + 1 === mes && today.getDate() < dia)
    ) {
        age--;
    }

    return age;

}