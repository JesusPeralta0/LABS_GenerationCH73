
print("Pidiendo 2 numeros al usuario y se realiza una suma")

numero1 = float(input("Escribe el primer numero: "))
numero2= float(input("Escribe el segundo numero: "))

# suma de 2 numeros
suma = numero1 + numero2

print(f"La suma es: {numero1} + {numero2} = {suma}")

print("************************************************")
print("Pidiendo 2 numeros al usuario y mostrando en autamico +,-,*,/,%")

numero1 = float(input("Escribe el primer numero: "))
numero2 = float(input("Escribe el segundo numero: "))

# suma de 2 numeros
suma = numero1 + numero2
print(f"La suma es: {numero1} + {numero2} = {suma}")
# resta 
resta = numero1 - numero2 
print(f"La resta es: {numero1} - {numero2} = {resta}")
# multiplicacion
multiplicar = numero1 * numero2
print(f"La multiplicacion es: {numero1} * {numero2} = {multiplicar}")
# dividir
dividir = numero1/numero2
print(f"La division es: {numero1} / {numero2} = {dividir}")
# modulo
modulo = numero1 % numero2
print(f"El modulo es: {numero1} % {numero2} = {modulo} ")

print("************************************************")
print("Pidiendo 2 numeros al usuario y decide que operacion quiere realizar")

while True:

    num1 = float(input("Escribe el primer numero: "))
    num2 = float(input("Escribe el segundo numero: "))

    operation = input("Introduzca que operacion desea realizar: (+, -, *, /, %): ")

    if operation == "+":
        print("Suma: ", num1 + num2)

    elif operation == "-":
        print("Resta: ", num1 - num2)

    elif operation == "*":
        print("Multiplicacion: ", num1 * num2)

    elif operation == "/":
        print("division: ", num1 / num2)

    elif operation == "%":
        print("Modulo: ", num1 % num2)

    else:
        print("Operacion Invalida")

    again = input("Desea realizar otra operacion ? (si/no): ")

    if again == "no":
        break

print("************************************************")
print("Pidiendo 3 numeros al usuario y mostrando la suma de esos 3 numeros")

num1 = float(input("Escribe el primer numero: "))
num2 = float(input("Escribe el segundo numero: "))
num3 = float(input("Escribe el tercer numero: "))

result = num1 + num2 + num3

print(f"{num1} + {num2} + {num3} = {result}")

print("************************************************")
print("Usario puede realizar cualquier operacion ej: 3*2-5")

while True:
    expression = input("Ingrese cuaquier operacion que deseé: ")

    result = eval(expression)

    print("Result:", result)

    again = input("Desea realizar otra operacion ? (si/no): ")
    
    if again == "no":
        break

    