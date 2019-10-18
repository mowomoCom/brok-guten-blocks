<div  align="center">
<br>
<img  width="70%"  src="https://www.mowomo.com/wp-content/uploads/2018/04/logo-mowomo.png"  alt="Logo de mowomo">
<br>
<br>
</div>

# 📦 `brok-guten-blocks`

> `brok-guten-blocks` is a development kit created by `mowomo.com` with ❤️ for the development of Gutenberg blocks, the new editor of WordPress.

Brok Guten Blocks was born as a solution to satisfy the demand for a Gutenberg block development kit capable of offering power and stability. A stability that obtains when being a project updated day by day and that is used constantly in the offices of mowomo to realize projects of great importance.

In addition, all commands and internal documentation will be in English.
`brok-guten-blocks` is, in a nutshell:

    • Agile

    • Stable

    • Update

    • English

    • Low dependence

## 🚀 Starting

Starting to work with `brok-guten-blocks` is very simple. We'll leave the steps here:

1. Clone this repository wherever you want.

2. Run the npm install command to set up the project for the first time.

Once this is done, you will be able to use the commands offered by `brok-guten-blocks` to manage your blocks, which we leave explained just below.

## 👨‍💻 Commands

This package contains some `custom console` created to make it easier to manage both the blocks and the plugin. A list of them is:

- `npm start`

    • Used to work with the kit itself.

    • Execute it whenever you are developing blocks, as it makes sure that all the code is compiled and corrected.

- `npm run crear "nombre-bloque"`

    • Used to generate a new block with the indicated name.

    • The created block will be correctly configured inside the plugin environment.

- `npm run borrar "nombre-bloque"`

    • Used to delete a block with the indicated name.

    • The deleted block will be properly removed from the plugin environment.

- `npm run exportar`

    • Used to configure a perfectly functional plugin in the folder `exports`.

    • To use it as a plugin you just have to pass it to the plugins folder of the WordPress installation you want and activate it.

## 📚 Low dependence

This development kit is based on certain dependencies that, if not included, would not work properly. Here's a summary of all of them:

- `@babel` allows us to work comfortably with JSX and that the React compiler doesn't miss anything we program it.

- `@wordpress` allows us to work with the resources that WordPress offers Gutenberg developers.

- `webpack` helps us to make a simulated react compilation to see the errors we have and then encapsulates all the code so that it is well ordered.

- `classnames`, `css-loader`, `node-sass`, `postcss-loader`, `raw-loader`, `sass-loader`, `autoprefixer` and `style-loader` help webpack understand the code we write so you can work with it and compile it.
    
- `path`, `rimraf` and `ncp` make custom commands even more agile.

## 💎 Philosophy

- **No configuration required:** When cloning and installing the dependencies you will have no need to configure the project.

- **All facilities:** You will be able to create and delete the blocks with only one command, you will save minutes of development. In addition, you can export all your blocks in a single plugin perfectly optimized and functional.

- **Highest performance** Each line of code of the blocks will be compiled and minimized so that WordPress consumes the minimum resources with your plugin.

- **You're not alone:** Any problem you encounter can be reported in the repository and we'll help you solve it without problems.

## 👍 Why `brok-guten-block`?

Very simple, because we help you save time:

- **Block handling commands:** You will save time by creating, deleting and exporting blocks with the commands we leave you ready to use.

- **Development Components Library:** You'll save time by using our component library created specifically to streamline block programming, based on the official WordPress libraries.

- **carefree** You'll save time checking for dependency updates, we'll do it for you.

## ⚜️ All for one, one for all

This is a project made by and for the community, a project of all. Although the`mowomo.com` team performs the bulk of the maintenance and updates, any member of the community can `folk`the project and improve any section of the repository.

Every time we see a `pull request` , we will study it and if it contributes some improvement to the repository we will not have any problem in adding it and updating the list of contributors. Become a `gbg-contributor`.
