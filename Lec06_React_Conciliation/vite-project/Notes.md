1. Observations:
Intially App.jsx and [index.html + index.js] was written to apply the same logic i.e to make increment and decrement counter.
App.jsx only render the count variable every time.

But, raw implementation of [index.html + index.js] would render each component(h1,p,incre,decre) everytime. every time this element would be created and destroyed and recreated on each successful render.

2. Real DOM AND VIRTUAL DOM:
React element form virtual dom, whereas raw implememtation of html forms real dom;
For example:
A. console.log(<h1>This would be the part of virtual dom</h1>);

B. const element = document.createElement('h1');
   element.textContent = "Hello Real DOM";
   console.dir(element);

3. VDOM are light weight whereas Real DOM are not 
Reason: Inspect the two, as you click "h1" element created as react element has fewer attributes, 
whereas html created "h1" has hundreds of attributes.
So, VDOM are light copy of DOM that focus on few attributes rather than focusing(rendering) hundreds of features.

4. What is diffing algorithm?
Comparing new virtual dom with old one to look for any changes has taken place.
Further, explanation:
Diagram in image folder:  ![React Diffing Algorithm](Images/diffing%20algorithm.png)