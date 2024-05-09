1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
They are the connection point between these three.

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
Used to store custom data that is private to a page or application. 
provide a consistent and customizable way to label elements, ensuring reliable identification for automated tests.
Just use data attributes like <p></p>
Separation of Concerns Ease of Access No Semantic Meaning

4. What is a DOM fragment? Why are they powerful?
The DocumentFragment interface represents a minimal document object that has no parent.
They help maintain high performance and user experience by reducing operating costs and minimizing reflows and redraws. For large-scale updates or dynamic content management, leveraging DocumentFragment can significantly improve the responsiveness and efficiency of your web application.

5. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
an abstraction of the HTML DOM
Performance Improvements Simplified Programming Model
Memory Overhead Additional Complexity Potential Overhead for Small Changes

6. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
'class' is a key word

7. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
addEventListener() is generally preferred for developing robust web applications due to its versatility and powerful features.
Simplicity Quick Setup HTML Visibility
Single Handler Mixing HTML with JavaScript Global Scope Limited Access to the Event Object
