import types

class JavaScriptObject:
	""" Esta clase simula un objeto de JavaScript(básico). """
	def __init__(self, prototype = None):
		self.__proto__ = prototype

	def  __getattr__(self, name):
		if name in self.__dict__.keys():
			return self.__dict__[name]
		elif self.__proto__ != None:
			attr = self.__proto__.__getattr__(name)
			if isinstance(attr, types.FunctionType):
				return lambda *args : attr(self, *args)
		raise Exception("Atributo no encontrado.")

		