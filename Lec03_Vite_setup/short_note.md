1a. vite is used to compress the overall our project(html,css,js).
1b. vite is thus a bundler.
2. React and React-dom are helpful client side scripting libraries.
3. Babel is used to transpile jsx code into javascript code.
4. Babel is not required as vite has module called ESBuild, which do same job as babel.
4a. Look index.html --> we have not linked  babel this time.  we have linked it in the Babel lecture.

Conclusion:
A. Babel and Vite is required only in developmet mode. It is of no use after the app has been deployed to the server. 

B. But react and react-dom is required even after the app has been deployed to the server. 

C. Two important feilds(Keys) in package-json:
    1. dependencies - track all the dependencies that are required in both the development and production environment.
    2. devdependencies - track all the dependencies that are required during the production phase only.

5. Importance of package-lock.json:

1. It tells at which version of respective packages(react, react-dom, other modules) does my code was working fine.
2. For a given module, we have the following :
A. version: shows at which version does my overall app was working fine.
B. resolved: Provide the link at which my npm package can be downloaded from.
C. Integrity: Provide sha-512 for original react code so that if there is any changes made, it can detected
D. Licence: MIT.
E. node_version: which node version is required for this module.

6. This is the manual way of building the Whole project structure(Lec03_vite_setup).
'''
To install : npm install vite
To run the code: npx vite

save the app.js as app.jsx because react element has been used.
also include import files : 
import React from "react";
import ReactDOM from "react-dom/client";
in index.html : <script type="module" src="./app.jsx"></script>
'''

7. This whole above process can be done in a single step:
   npm create vite@latest -- see the folder Lec03 - part-02;


