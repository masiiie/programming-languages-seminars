from javascriptobject import JavaScriptObject
import types

def modoEspera(js_object, seconds):
	print(js_object.nombre + ': Iniciando modo espera...')
	js_object.estado = 0
	print(js_object.nombre + ': En modo espera ' + str(seconds) + ' segundos!')

def activar(js_object):
	print(js_object.nombre + ': Saliendo modo espera...')
	js_object.estado = 1
	print(js_object.nombre + ': Activado!')

def ayuda(js_object, who):
	if js_object.estado == 1:
		print(js_object.nombre + ': Vengo inmediatamente, ' + who + '!')
	else:
		print(js_object.nombre + ': Piiiip')

def modo_combate(js_object):
	print(js_object.nombre + ': estoy en la batalla.')

prototipo_robot = JavaScriptObject()
prototipo_robot.modoEspera = modoEspera
prototipo_robot.activar = activar
prototipo_robot.ayuda = ayuda

robot = JavaScriptObject(prototype = prototipo_robot)
robot.nombre = 'Iron Giant'
robot.tipo = 'fighter machine'
robot.modoEspera(10)
robot.activar()
robot.ayuda('Masiel')
robot.__proto__.modo_combate = modo_combate
robot.modo_combate()

#esta linea da excepcion pues el metodo no esta definido
#robot.baila()

mazinger = JavaScriptObject(prototype = prototipo_robot)
mazinger.nombre = 'Mazinger Z'
mazinger.tipo = 'Planet Watcher'
mazinger.modoEspera(15)
mazinger.ayuda('Planeta')
mazinger.activar()
mazinger.modo_combate()
