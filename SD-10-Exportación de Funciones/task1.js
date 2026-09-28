export function costCalculator(monto) {
 monto = Number(monto)
 const cuotaFija = 3;
 const interes = monto * 0.01;

return monto + cuotaFija + interes;
}