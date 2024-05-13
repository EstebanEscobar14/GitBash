📋 **Índice**

1. [Crear un Repositorio Git](#crear-un-repositorio-git)
2. [Crear y Cambiar entre Ramas](#crear-y-cambiar-entre-ramas)
3. [Trabajar en Proyectos en cada Rama](#trabajar-en-proyectos-en-cada-rama)
4. [Cambiar entre Ramas](#cambiar-entre-ramas)
5. [Fusionar Ramas (Opcional)](#fusionar-ramas-opcional)
6. [Enviar Ramas al Repositorio Remoto](#enviar-ramas-al-repositorio-remoto)
7. [Cambiar de Rama en Git](#cambiar-de-rama-en-git)

---
### Crear un Repositorio Git

1. Abre tu terminal o línea de comandos.
2. Navega hasta el directorio donde deseas crear tu repositorio.
3. Ejecuta el siguiente comando para iniciar un nuevo repositorio Git:
   
   ```bash
   git init nombre_del_repositorio
   ```
   
   Esto creará un nuevo directorio llamado `nombre_del_repositorio` y lo inicializará como un repositorio Git.

 ##### Resumen de comandos Basicos para subir un proyecto al repostorio
 *1. echo "# GitBash" >> README.md*
 *2. git init*
 *3. git add README.md*
 *4. git commit -m "first commit"*
 *5. git branch -M main*
 *6. git remote add origin https://github.com/nombre_usuario/nombre_repositorio.git*
 *7. git push -u origin main*

### Crear y Cambiar entre Ramas

1. Una vez que tienes tu repositorio creado, puedes comenzar a trabajar con ramas.
2. Para crear una nueva rama, usa el siguiente comando:
   
   ```bash
   git checkout -b nombre_de_la_rama
   ```

   Esto creará una nueva rama y cambiará tu directorio de trabajo a esa rama.

### Trabajar en Proyectos en cada Rama

1. Desarrolla tu proyecto en la rama actual. Agrega archivos, realiza cambios, etc.
2. Cuando estés listo para confirmar tus cambios, primero asegúrate de estar en la rama correcta con `git status` y luego agrega los archivos modificados:
   
   ```bash
   git add .
   ```
   
3. Realiza un commit de tus cambios:
   
   ```bash
   git commit -m "Mensaje descriptivo del commit"
   ```

4. Si deseas enviar tus cambios a un repositorio remoto, usa el siguiente comando:
   
   ```bash
   git push origin nombre_de_la_rama
   ```
   
   Esto enviará tus cambios a la rama especificada en el repositorio remoto.

### Cambiar entre Ramas

1. Puedes cambiar entre las ramas utilizando el comando `git checkout` seguido del nombre de la rama:
   
   ```bash
   git checkout nombre_de_la_rama
   ```

2. Esto cambiará tu directorio de trabajo a la rama especificada.

### Fusionar Ramas (Opcional)

1. Si deseas fusionar los cambios de una rama en otra, primero asegúrate de estar en la rama de destino.
2. Luego, usa el comando `git merge` seguido del nombre de la rama que deseas fusionar:
   
   ```bash
   git merge nombre_de_la_otra_rama
   ```

3. Esto fusionará los cambios de la otra rama en la rama actual.

### Enviar Ramas al Repositorio Remoto

Recuerda que necesitas los permisos adecuados para poder enviar ramas al repositorio remoto. Si no tienes los permisos necesarios, es posible que debas solicitar a alguien que tenga acceso para que lo haga por ti.

### Cambiar de Rama en Git

Para cambiar de rama en Git, puedes utilizar el comando `git checkout` seguido del nombre de la rama a la que deseas cambiar. Por ejemplo:

```bash
git checkout nombre_de_la_rama
```

Esto cambiará tu directorio de trabajo a la rama especificada. Si estás utilizando Git 2.23 o superior, puedes utilizar `git switch` como una alternativa más intuitiva y segura para cambiar de rama:

```bash
git switch nombre_de_la_rama
```

Ambos comandos (`git checkout` y `git switch`) tienen el mismo propósito de cambiar de rama. La elección entre ellos depende de tus preferencias personales y de la versión de Git que estés utilizando.

**Recuerda hacer un 'git pull' a la consola.**