# Express Essentials - expressjs
ExpressJS is a minimal, flexible, NodeJS application framework. It is definitely one of the most, if not the most popular framework for no JS. ExpressJS is used to make building websites, web applications, and APIs, as easy as possible using JavaScript.

ExpressJS is used to handle and simplify responses from API requests and supports various templating engines to simplify HTML generation. If you're not familiar with templating engines, they're used to create HTML templates with minimal code and give you the ability to feed variables into the templates. To give you a more visual explanation of how NodeJS and ExpressJS work in conjunction with what we consider the front-end of an application or the client, see the diagram below, that outlines the process. 

<img src="https://repository-images.githubusercontent.com/586590349/d772e7fe-8204-4572-8c0f-6ac19c08d91b" height="80%" width="80%" alt="NodeJS ExpressJS Work Flow Diagram" title="ExpressJS Work Flow Diagram">

The client sends a request to your Node server, which then relays that request to Express. Express takes the request and generates the appropriate response with the help from Middleware, which we will talk about Middleware more in depth in later videos, and then sends the response back through the Node server to the client. 

With the next set of code examples, we will be referencing the Express documentation quite a bit with the intent to give a solid foundation in ExpresJSs in order to carry that knowledge over to start building applications based on an endepth knowledge of ExpressJS, specifically.
