# Useful commads
- Install node.js, in the vs code terminal run `npm typescript -g`(-g stands for global)
- Move to your folder with cd
- Create a main.ts file(ts stands for typescript), in the terminal run `tsc main.ts`, it will create a main.js file(it utilize var because is setting up like that) (create the .html as well xD)
## Setting up che project tree
- Now we want a project tree, so we create a src and a buil folder for respectively .ts files and for the .html file.
- In the terminal run ` tsc --init` that create a tsconfig.json, you have to specify the src dir(src), the out dir(build.js, it will create it for u) and if you notice now he utilize let (cuz **target** is es2016, u can change it if you want)