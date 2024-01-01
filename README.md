#some facts about the V8 engine 


  The browser can't run the jscode directly , that's why js engine was introduced . it translate the js code into machine code only then the code can be executed.

  v8 is written in C++ . it can be used indepedently or can be embodded with other C++ program

  since C++ is great for low-level operations like file-handling, database connections and network operations , by emboddinig v8 to any c++ program , we have the leverage to add alll this functionalities in javaScript
 
 This wrapper function ensures that the code in a module doesn't interfere with the global scope.
 (function(exports, require, module, __filename, __dirname) {
    // Module code lives here
});


module caching-ones data change then it also change in memory.Subsequent calls to "require" for the same module will retrieve the cached version instead of re-executing the module code.