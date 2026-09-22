import requests 


def trivia_fetch(num):
  url = f"https://opentdb.com/api.php?amount={num}"
  response = requests.get(url)
  trivia = response.json()

  for pregunta in trivia["results"]:
   print(pregunta["question"])

  return trivia






def main():
  print("Hello learners!")
  cantidad = int(input("¿Cuántas preguntas quieres? "))
  trivia = trivia_fetch(cantidad)

  print(trivia)




if __name__=="__main__":
  main()