Answers of the Assignment Questions:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
* getElementById = Selects one element by its ID (#idName).
* getElementsByClassName = Selects all elements with the same class and returns a collection.
* querySelector = Selects the first element of a css selector
* querySelectorAll = Selects all elements matching a css selector and returns a list.


2.How do you create and insert a new element into the DOM?
ans:
* To create and insert a new element into the DOM I use document.createElement() to create element & appendChild() to set the element to the DOM.


3.What is Event Bubbling and how does it work?
ans: 
* When an event happens on an element, it keeps bubbling up to it's parent elements till the top.


4.What is Event Delegation in JavaScript? Why is it useful?
ans:
* In JavaScript event delegation is attaching one event to a parent element to handling events on child elements.
* It is useful for dynamic elements.


5.What is the difference between preventDefault() and stopPropagation() methods?
ans:
* preventDefault() = This is used to stop default actions like (auto reload the website for a form submission)
* stopPropagation() = This is used to stop the event from bubbling up to parent element. 