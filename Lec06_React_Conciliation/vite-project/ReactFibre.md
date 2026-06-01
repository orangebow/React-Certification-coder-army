Before React Fiber was introduced (back in React 16), React used a rendering engine that built and updated the DOM tree using a **synchronous, recursive DFS (Depth-First Search)** approach.

While straightforward, this old approach had a massive flaw: once React started building or updating the tree, **it couldn't stop**. If the tree was large, the main JavaScript thread would get blocked, causing the browser to drop frames and feel laggy.

**React Fiber completely reimagined this.** It turned the rigid, recursive DOM tree construction into a flexible, virtual **linked list of "mini-tasks"** that can be paused, prioritized, and split apart.

Here is exactly how React Fiber optimizes the creation and updating of the DOM tree.

---

## 1. From a Rigid Tree to a Linked List

In the old system, a parent node directly held an array of its children. Fiber changes the data structure. Each React element gets a corresponding **Fiber node**, and these nodes are linked together using a specific pointer system:

* **`child`**: Points *only* to the first direct child.
* **`sibling`**: Points to the next sibling node.
* **`return`**: Points back to the parent node.

Because of this linked list structure, React no longer needs to rely on the built-in JavaScript call stack (which you can't pause). Instead, it manages its own virtual stack frame. If React is halfway through processing a tree and a high-priority event comes in (like a user typing), React can just save the pointer to the current Fiber node, pause, handle the typing, and come right back.

---

## 2. The Two-Phase Rendering Strategy

Fiber splits the work of creating and updating the DOM into two distinct phases: **Render** and **Commit**.

### Phase 1: The Render Phase (Asynchronous & Pausable)

During this phase, React does the heavy lifting of figuring out what changes need to be made to the DOM. It builds a **work-in-progress tree**.

* **Work is broken into small units:** React processes one Fiber node at a time.
* **Time-Slicing:** It uses browser APIs like `requestIdleCallback` (or its own scheduler equivalent) to check how much time is left in the current frame (usually around 16ms for 60fps). If time runs out, it yields control back to the browser to paint the screen.
* **No DOM mutations:** No actual changes are made to the real DOM here, which is why it's safe to pause, discard, or restart this phase if a higher-priority update comes along.

### Phase 2: The Commit Phase (Synchronous & Fast)

Once the entire work-in-progress tree is finished and React has a complete list of changes (effects), it enters the Commit Phase.

* **Mutating the DOM:** React quickly applies all the insertions, updates, and deletions to the actual DOM in one single, uninterrupted go.
* **Why it's fast:** Because all the math, diffing, and tree-building were already figured out during the Render phase, the Commit phase runs incredibly fast, ensuring the user sees a smooth visual transition.

---

## 3. Double Buffering (The "Video Game" Trick)

To make DOM tree updates imperceptible to the user, Fiber uses a technique borrowed from computer graphics called **Double Buffering**.

React maintains two trees simultaneously:

1. **The Current Tree:** The tree that is currently reflected in the visible DOM.
2. **The Work-In-Progress Tree:** The tree being built in the background during the Render phase.

While the user is looking at the *Current Tree*, React is quietly constructing the *Work-In-Progress Tree* using Fiber nodes. The moment the Render phase finishes and the Commit phase applies the changes, React simply swaps a pointer. The *Work-In-Progress Tree* instantly becomes the *Current Tree*. This eliminates partial rendering or "flickering" on the screen.

---

## 4. Intelligent Prioritization

Fiber classifies every update with a priority level.

* **Immediate Priority:** Discrete user actions like clicks or keyboard inputs.
* **Normal Priority:** Data fetching, network requests, or minor background updates.

If React is in the middle of building a DOM tree for a low-priority background data fetch, and the user suddenly clicks a button that triggers an animation, React will **abort** the background tree construction, immediately build and commit the tree for the animation, and then restart the background work.

---

