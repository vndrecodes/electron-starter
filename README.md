# electron starter
Basic runnable electron boilerplate project that can be used as a starting point.


## Init Project

Clone the repository:
```shell
  git clone https://github.com/vndrecodes/electron-starter
```

Go to the project root directory:
```shell
  cd electron-starter
```

Remove git configs:
```shell
  cd scripts/
  bash init.sh
```

Rename project directory

## Create Webstorm project:
1. Create new *Webstorm* `Node.js` project.
2. Use Project root as *location*  
3. Let *Webstorm* handle project initialization with `CREATE FROM EXISTING SOURCES`  
4. Edit run configurations:
  ```
  Node interpreter: ./node_modules/.bin/electron
  Node parameters: .
  Working directory: <project_root>
  ```

## Or run from command-line:
Install dependencies:
```shell
  npm install
```

Start the application:
```shell
  npm start
```


## Authors

- [@vndrecodes](https://www.github.com/vndrecodes)
