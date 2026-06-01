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

5. While looking at More scenarios, we discussed about the key, importance of key.
We come across major problems regarding key:
Few things to remember:
1. Keys should be unique. Eg: name in scenario2.
2. If you not assign key, by default key would be assigned on the basis of the "index".
example:
We hava an array of fruits: ["Mango", "Apple", "Banana"].
if i assigned key={name}, then key-value pairs would be: Mango: "Mango" and so on.... {key(object):value(string)}.
else:
Key={index} by default, would result in key-value pairs :  1 :"Mango", 2:"Apple", 3:"Banana".

why index are bad choice for key , look Problem_statement.md of the Scenario_2.


6. What are the benefits of using index as key?
-->React fibre:

1. Javascript is single-threaded.
2. suppose we have counter button and input placeholder in our UI.
3. While state are changing for the count state, every time reconciliation process is used to create new vdom
and compare old vdom and new vdom.
4. But if user start typing something on the input space, he would not be able to see text because js is single threaded and it is buzy in creating new vdom tree.
5. To tackle this we use React Fibre. React Fibre can suddenly stop the building process of vdom tree on sensing that user is typing something on the input space.

6. How React Fibre is able to do so ?
1. It is natural to think that tree is build with help of rescursion(more precisely using DFS).
2. Problem with this approach:
A. If dom tree contains thousands of node, it can overflow the stack memory.
B. For any reasons if stack does not get overflow, we need to pop out all the progress out of the stack if we want to execute the input text typing as this process will also be handled in stack memory.

C. so, instead of using recursive implementation of tree building, REACT FIBRE uses "while loop" implementation of the tree building.
This approach completes the process in just three pointers: from node to:
a. Parent
b. right sibling
c. First child
From reference, refer the below diagram:
[TreeDiagram](Images/TreeBuilding.png)

To know more, go to ReactFibre.md

