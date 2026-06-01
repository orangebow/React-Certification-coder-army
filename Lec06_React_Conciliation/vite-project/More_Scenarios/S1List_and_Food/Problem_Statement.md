see the Problem:![Problem_Inspect](./imgs/Problem.png)

//why it is showing that list should have a unique key prop.
//Solutions:

[BruteForce](./imgs/Reconciliation.png)
I- it would compare the first child of old vdom with new vdom, this way it would find change that children has become 4 from 3.
II- Changes React detected: (Let index be child).
1: TextContent change: Mango
2: Tect Content Change: Apple
3: Text Content Change: Orange
4: Create new list element and put Banana inside it.

Note: Original array contain apple, orange, Banana.
But while creating newList banana is added at end, since mango replaced apple, apple replaced orange and orange replaced banana.

This changes will be communicated to React-DOM and Reat-DOM will communicate it to the Real-DOM.
The issue is that we are communicating four changes from "React-DOM to Real-DOM". But, we know that only one change is required that is the addition of the mango element as first child. This what causes a need for "list should have a unique key prop".

How key solved the Problem?
Answer: These four changes will be conveyed from the vdom to react-dom:
1: A new list item needs to be made, and "Mango" needs to be put inside it; that will be the first item.
2: "Apple" will be in position 2.
3: "Orange" will be in position 3.
4: "Banana" will be in position 4.

The React-DOM will analyze these changes, will convey only following to real-dom:
1.parent is Food component.

2.document.createElement('li')
list.textContent = "Mango".

3.parent.Prepend(list);  ====> This is single code communication.

Indeed, we reduced the four dom changes to single change.


Note: Never use index as key.
 return(
        <>
        <ul>
        {foods.map((food,index)=><li key={index}>{food}</li>)}
        </ul>
        </>
    )
Because again you will go in the error of the four changes of finding the index and replacing the textContent each time it see changes in old and new vdom.





