dias = int(input('Ingrese la cantidad de días de hospitalización: '))
edad = int(input('Ingrese la edad del paciente: '))
enfermedad = int(input('Indique el tipo de enfermedad 1 , 2, 3 ó 4: '))

porc_adicional = 0.10
#Inicio: Estructura condicional múltiple para determinar el costo del tipo de enfermedad
if enfermedad == 1:
  costo = 25
elif enfermedad == 2:
  costo = 16
elif enfermedad == 3:
  costo = 20
elif enfermedad == 4:
  costo = 32
else: #Escenario default
  costo = 20
#Fin: Estructura condicional múltiple 

subtotal = costo * dias

#Estructura condicional doble
if edad >= 14 and edad <= 22:
  costo_adicional = subtotal * porc_adicional
  total = subtotal + costo_adicional
else:
  total = subtotal 

print('El total es: ' , total)


