#   README
Rutas:
 
```
 > localhost:3000/
 *  Todas las loterias hechas hasta ahora
 
 >  localhost:3000/last
 * Muestra el ganador de la última lotería
 
 >  localhost:3000/winner
 *  Me muestra el número ganador actual

 >  localhost:3000/auth
 *  Registro de usuarios
 * Es Post

 >  localhost:3000/auth/sign_in
 *  Inicio de sesión
 *  Es Post

 >  localhost:3000/users
 *  Todos los usuarios ordenados de menor a mayor puntaje
 * [Solo Username, Score e Email, se puede modificar en serializers]

 >  localhost:3000/welcum
 *  Testing de autenticación

  >  localhost:3000/bets
 * Me muestra todas las apuestas hechas hasta ahora DEL ÚLTIMO NÚMERO

 > localhost:3000/can
 * Me muestra un arreglo de todos los números que aun no han sido tomados

 >localhost:3000/new_bet 
 * Me permite postearme a una nueva apuesta. SOLO SI EL USUARIO ESTÁ REGISTRADO
 *Se mandan archivos en un json de la siguiente forma:
 *Es post
 {
	"num":98
 }


 > localhost:3000/user_winner
 * Me muestra el ganador de la anterior ronda. Si no hubo ganador, me muestra un arreglo con un solo elemento que dice ["No hubo ganador."]

> localhost:3000/user
* Me muestra la información del usuario que ha iniciado sesión

```

¿Cómo funciona?

Todo se basa en el último número jugado, no hay link directo en eso y todavia no hay eventos, la única forma de crear una nueva lotería es escribiendo "rails console" y escribir lo siguiente:

```ruby
lot= Lottery.create(winner: rand(0..100), description: '')
lot.save
#rand(0..100) puede ser un número propio del 0 al 100.
```

Al realizar esta acción, /winner mostrará este último número.
Y el anterior a este va a tener de enlace /last

Si se crea otra apuesta "Lottery", /bets no va a mostrar nada. y /can va a tener todos los números del 0 al 100

Si se crea un /new_bet con el usuario iniciado sesión correctamente, bets se actualizará mostrando la jugada y los números del 0 al 100 desaparecerá el número seleccionado.

Existen usuarios actualmente:

* juasmartinezbel@unal.edu.co
* juasjuas1@memes.com
* juasjuas2@memes.com
* juasjuas3@memes.com

La contraseña de todos es 123456789 si se desean realizar pruebas.


