def addmultiplenumbers(numbers):
   total = 0
   for i in numbers:
      total += i
   return total

def multiplymultiplenumbers(numbers):
   total = 1
   for i in numbers:
      total *= i
   return total


def isiteven(num):
    if isitaninteger(num):
        return num % 2 == 0

    return False

def isitaninteger(num):
    return isinstance(num, int)


def main():
  print("Hello learners!")
  
  print("=== CALCULADORA ===")
  print("1. Sumar números")
  print("2. Multiplicar números")
  print("3. Comprobar si es par")
  print("4. Comprobar si es entero")

  opcion = input("Elige una opción: ")

  if opcion == "1":
      numbers = input("Introduce los números que deseas sumar separados por espacios: ")
      numbers = [float(number) for number in numbers.split()]

      result = addmultiplenumbers(numbers)
      print("Resultado:", result)

  elif opcion == "2":
     numbers = input("Introduce los números que deseas multiplicar separados por espacios: ")
     numbers = [float(number) for number in numbers.split()]
     
     result = multiplymultiplenumbers(numbers)
     print("Resultado:", result)

  elif opcion == "3":
        number = input("Introduce un número: ")

        if "." in number:
            number = float(number)
        else:
            number = int(number)

        result = isiteven(number)
        print("¿Es un número entero y par?", result)

  elif opcion == "4":
        number = input("Introduce un número: ")

        if "." in number:
            number = float(number)
        else:
            number = int(number)

        result = isitaninteger(number)
        print("¿Es un número entero?", result)



if __name__=="__main__":
  main()






