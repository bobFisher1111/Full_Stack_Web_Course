//jshint esversion:6
/*
    - node.js:
        - Native Node Modules:
            - Documentation:
                https://nodejs.org/docs/latest/api/

        - NPM Packages:
            - Package manager, anyone can use

        - allows us to entract with computer
        - It's used for backend like django, flask, sprint boot
        - Terminal:
            - Run the code is
        - REPL(Read Evaulation Print Loop):
            - Inside terminal you can run javascript code with node
                - type:
                    - "node & press enter"
            - exit: 
                - type:
                    - ".exit" or control c twice
        
        - Create a package:
            - Go inside folder:
                - type in terminal:
                    - npm init
                    - give it a packageName or press enter if you like suggestion
                    - follow commands
*/
// to use file system module: this is like an import in pandas
const fs = require('fs');

// copyfile:
// https://nodejs.org/docs/latest/api/fs.html#fs_fs_copyfilesync_src_dest_mode
fs.copyFileSync("original.txt", "newFileCopied.txt");