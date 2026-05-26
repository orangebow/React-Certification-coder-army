# JSX - What It Actually Is
   • JSX is NOT HTML - proof with real examples
   • Why className instead of class
   • Why style is an object, not a string
   • Self-closing tags requirement
   • JavaScript expressions inside {}

# Babel - The Transpiler
   • What is Babel and why we need it
   • Transpiler vs Compiler - the difference
   • How type="text/babel" works
   • Runtime vs Build-time transformation

# JSX Expressions - The Complete Picture
   • What can go inside {} and WHY
   • Strings, Numbers, Arrays - what renders
   • Booleans, null, undefined - why they don't render
   • Objects - why they throw errors
   • Functions returning JSX

# React Components
   • Component = Function that returns JSX
   • Why capital letter is REQUIRED (not just convention)
   • How React.createElement handles components vs DOM elements
   • Component composition - components inside components

# Props - Passing Data to Components
   • Props as function parameters
   • Different data types in props (string, number, boolean, array, object, function)
   • Props are read-only - why?
   • Destructuring props
   • The children prop

# The Complete Flow
   • JSX → React.createElement() → React Element (Virtual DOM) → Real DOM
   • Who does what: Babel vs React vs ReactDOM
   • Recursive resolution of components
