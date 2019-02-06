<div  align="center">
<br>
<img  width="70%"  src="https://www.mowomo.com/wp-content/uploads/2018/04/logo-mowomo.png"  alt="Logo de mowomo">
<br>
<br>
</div>

# 📦`brok-guten-blocks`

> `brok-guten-blocks` es un kit de desarrollo creado por `mowomo.com` con ❤️ para el desarrollo de bloques de Gutenberg, el nuevo editor de WordPress.

Brok Guten Blocks nació como solución a no encontrar ningún kit de desarrollo de bloques de Gutenberg capaz de ofrecer potencia y a la vez estabilidad. Una estabilidad que obtiene al ser un proyecto actualizado día a día y que se utiliza constantemente en las oficinas de mowomo para realizar proyectos de gran envergadura.

Además, está enfocado a ser usado por la comunidad de habla hispana, por lo que todos los comandos y documentación interna estarán en castellano.

`brok-guten-blocks` es, en resumen:

- 🐆 Ágil
- 🐘 Estable
- 🐝 Actualizado
- 🐂 Español
- 🦅 Dependencia mínima

## 🚀 Empezando

Empezar a trabajar con `brok-guten-blocks` es muy sencillo. Te dejamos aquí los pasos:

1.  🤙 Clonar este repositorio donde quieras.
2.  🤙 Ejecutar el comando `npm install` para configurar el proyecto por primera vez.

Una vez hecho esto, podrás usar ya los comandos que te ofrece `brok-guten-blocks` para administrar tus bloques, los cuales te dejamos explicados justo abajo.

## 👨‍💻 Comandos

Este paquete contiene algunos `comandos de consola` personalizados creados para facilitar la administración tanto de los bloques como del plugin. Una lista de ellos es:

🤙 `npm start`

- Usado para trabajar con el kit en sí mismo.
- Ejecútalo siempre que estés desarrollando bloques, ya que se encarga de que todo el código se vaya compilando y corrigiendo.

🤙 `npm run crear "nombre-bloque"`

- Usado para generar un nuevo bloque con el nombre indicado.
- El bloque creado estará correctamente configurando dentro del entorno del plugin.

🤙 `npm run borrar "nombre-bloque"`

- Usado para borrar un bloque con el nombre indicado.
- El bloque borrado será correctamente desconfigurado del entorno del plugin.

## 🥏 Dependencias mínimas

Este kit de desarrollo se basa en ciertas dependencias que, de no estar incluidas, no funcionaría correctamente. Te hacemos un resumen de todas ellas:

- 🤙 `@babel` nos permite trabajar a gusto con JSX y que el compilador de React no se pierda nada de lo que le programamos.

- 🤙 `@wordpress` nos permite trabajar con los recursos que WordPress ofrece a los desarrolladores de Gutenberg.

- 🤙 `webpack` nos ayuda a hacer una compilación simulada de react para ver los errores que tenemos y luego nos encapsula todo el código para que esté bien ordenado.

- 🤙 `classnames`, `css-loader`, `node-sass`, `postcss-loader`, `raw-loader`, `sass-loader`, `autoprefixer` y `style-loader` ayudan a webpack a entender el código que escribimos para que pueda trabajar con él y así poder compilarlo.

- 🤙 `path`, `rimraf` y `ncp` ayudan a que los comandos personalizados sean aún más ágiles.
