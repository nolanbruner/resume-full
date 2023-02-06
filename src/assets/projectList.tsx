import * as icons from "../icons"
const projectList = [
    {
        name: "website",
        title: "Personal Portfolio Website",
        overview: "Built a web app to display what I have worked on and to get more experience building Full-Stack apps.",
        tech: ["Following graduation I had an internship completed with no repositories to show my skills at creating web apps, so I decided why not make one to showcase other projects I have worked on","This project was a feat in itself because I have always been given some design to copy. This time I had to start from scratch and decide what looked professional yet creative, and this is what I came up with.","This project is a culmination of what I have learned from my internship as well as what I have learned since"],
        icons: [icons.reacticon, icons.styled,icons.css,icons.github],
        link: "",
        gitLink:"https://github.com/nolanbruner/resume-full"

    },
    {
        name: "API",
        title: "Random Quote API",
        overview: "Built a web app to retrieve a random quote from MongoDB with serverless functions.",
        tech: ["My personal website is hosted on a netlify server, which uses lambda functions to retrieve data. I built this application to practice building API's by using serverless functions, netlify cli, and Mongo Atlas.", "I started with a repository from netlify and then went on to build my own API by using a mongo endpoint, which I filled with some quotes from my favorite authors.", " From this project I learned how lambda functions work with react, axios, and netlify, as well as creating endpoints with mongoDB."],
        icons: [icons.reacticon, icons.mongo],
        link: "https://comforting-gnome-8841d2.netlify.app/",
        gitLink:"https://github.com/nolanbruner/thought-portal"

    },
    {
        name: "vi",
        title: "Virtual Influencer Interface",
        overview: "Created a UI for a AI tool for generating virtual models.",
        tech: ["This tool was created so the marketing team could use a Virtual model rendering tool developed by our AI pod. My responsibilities included creating reusable components, building out pages that matched a figma design, create mock api's, and hande state routing. Initially I needed to learn ReactJS, which was different from traditional html. I taught myself the basics and met with my advisor weekely to learn best practices as well as the fundamentals of ReactJS.", "My advisor taught me to not code by coincidence, and to understand what every line of code I wrote. These meetings were helpful, but they were limited to his schedule. After I would complete each page, I would resolve merge conflicts, commit my branch, make a merge request, and get a peer review to ensure my branch could be merged.", "The application itself had 5 pages: select an influencer, select a background, upload product, current processes that were rendering in the back-end, and finally drag and scale to place the product image. Initially, I built 3 mock api's and simplified them into one by nesting objects in JSON. Used link-state routing to create a new JSON object that would be saved for future use. Finally, used a package named interactJS to create the drag and scale page, where the user could modify and download the finished image.  "],
        icons: [icons.reacticon, icons.styled,icons.css, icons.gitlab],
        link: "",
        gitLink:""

    },
    {
        name: "trends",
        title: "Sales Visualization",
        overview: "For my intern program we were tasked with creating a new product line for one of our brands.",
        tech: ["Each branch of the company came up with categories and ideas to help with the final sales pitch, that was given at the end of our internship. These categories were relative to our role as interns. These ideas consisted of customer segmentation, sales forecasting, trend analysis, and brand promotions, ", "I chose to research customer segmentation because I felt it was most important to our pitch. I began to analytics on the sales sheet in our data warehouse, and I found that most of our customers were located in a single state. In an attempt to visualize this information, I decided to make a tool that would display a geographic chloropeth map of our sales information. To do this I created a react app with two packages, ChartJS and topoJSON, that allowed the user to see how many sales were made in a given country or state. ", "With this information, we were able to find which areas of the world to target our ads and optimize the click-to-ad ratio. "],
        icons: [icons.cloud],
        link: "",
        gitLink:""
    },
    {
        name: "cafe",
        title: "Cafe Munshn Lunshn ",
        overview: "This project was the basis of my Web Programming class at the University of Kentucky.",
        tech: ["Throughout the year we were tasked with updating this mock cafe page with new features, and new designs. Some of these features: sql-request of menu items and descriptions, JQuery to count how many requests, JSON responses, animations, and error handeling.", "Although html itself isn't a popular way to write web applications, I believe it is fundamental to learn where web frameworks such as React and Angular came from, and how they differ from tradional html, and many of the ideas carry over to these newer frameworks"],
        icons: [icons.html, icons.php, icons.css],
        link: "",
        gitLink:"https://github.com/nolanbruner/MunshnLunchn"
    },
    {
        name: "willitfit",
        title: "WillitFit",
        overview: "Created this project for a hackathon hosted by the University of Kentucky. ",
        tech: ["The insiration from this project came from working at an e-commerce company. There were many prize categories, but I decided go with the 'best use for VR. I realized that e-commerce is a fastly growing industry, but it has limitations that show rooms do not. If I wanted to decorate a room traditionaly I would go to the store, find products that matched, and would be able to infer how these items would look in my room.", " I decided to embed software from one of our sponsers, Echo3D , to create an ecommerce page that listed all of its products in a catelog, and the user could place each item in his/her cart around the room. I developed a prototype for this idea but it had its limitations that I was unable to resolve. "],
        icons: [icons.html, icons.css],
        link: "",
        gitLink:"https://github.com/nolanbruner/willthatfit"
    },
    {
        name: "carekit",
        title: "Apple's Care Kit",
        overview: "This health app was the basis of my App development course using Apple's open source Care Kit. ",
        tech: ["This was a full-stack application that used a MVVM style for development. We were given an open source sample app from apple that had standard features for a maternity app, such as medication tracker, nasusa log, and a contact view for contacting various providers. We were prompted to add features such as: login view and water consumption as assignments throughout the year. For our final project we were tasked with adding two features of our own.", "I decided to add notification functionality that reminded you to drink water at a set time interval, a view to manage notifications, and a view to log emotions."],
        icons: [icons.swift],
        link: "",
        gitLink:"https://github.com/nolanbruner/final-project-nolanbruner"
    },
    
]
export default projectList
