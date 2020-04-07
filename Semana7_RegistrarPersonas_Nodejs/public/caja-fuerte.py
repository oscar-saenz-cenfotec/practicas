import math
digito_a = int(input('ingrese el dígito a:  '))
digito_b = int(input('ingrese el dígito b:  '))
digito_c = int(input('ingrese el dígito c:  '))
digito_d = int(input('ingrese el dígito d:  '))
#Determinar el número mayor
if digito_a > digito_b and digito_a > digito_c :
  mayor = digito_a
else: 
  if digito_b > digito_a and digito_b > digito_c :
    mayor = digito_b
  else:
    mayor = digito_c
#Determinar el número menor
if digito_a < digito_b and digito_a < digito_c :
  menor = digito_a
else:
  if digito_b < digito_a and digito_b < digito_c :
    menor = digito_b
  else:
    menor = digito_c
#Evaluación para indicar si la clave se puede calcular
if digito_d==(mayor-menor):
  clave_1 = math.pow(menor,2) % 10 #menor**2 %10
  clave_2 = (menor - mayor) * -1
  cubo = math.pow(mayor,3) #mayor**3
  residuo_2 = cubo % 2
  residuo_3 = cubo % 3
  if residuo_2 == 0 :
    if residuo_3 == 0:
      clave_3 = 1
    else: 
      clave_3 = 3
  else: 
    if residuo_3 == 0:
      clave_3 = 2
    else:
      clave_3 = 4
  print('La clave es: ', int(clave_1), int(clave_2), int(clave_3))   
else:
  msj='No se puede calcular la clave con esos digitos'
  print(msj)

    
