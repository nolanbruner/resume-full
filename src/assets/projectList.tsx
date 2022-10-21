import * as icons from "../icons"
const projectList=[
    {
        name:"vi",
        title:"Virtual Influencer Interface",
        overview:"Created a UI for a AI tool for generating virtual models.",
        tech:["This tool was created so our marketing team could use a Virtual model rendering tool developed by our AI pod. My responsibilities included learning ReactJS, creating reusable components, building out pages, and hande state routing. Initially I had to learn ReactJS which was different from traditional html. Initially I built out all 9 pages with html and css but these websites did not have much more functionality than the figma designs I was modeling. A couple weeks later a principle engineer joined our team, and he worked with me twice a week for 4 months to create a full scale application. Once I had all of the pages built out I realized there were some flow issues with the design, so I worked with other engineers to come up with a clearer flow. I also realized that the rendering was not perfect and the products would need to be placed manually, so I installed a package called InteractJS, which allowed me to create a tool for dragging and scaling the influencer images and product images onto a background.   "],
        icons:[icons.reacticon],
    
    },
    {
        name:"trends",
        title:"Sales Visualization",
        overview:"For my intern program we were tasked with creating a new product line for one of our brands",
        tech:["I didn't have anything assigned to me for this project because all of the tech assignments were geared to the AI interns, so it was up to me to find a way to help. One of the assignments was to find product segmentation in the historical data in our sales from the past 2 years. There were not too many useful attributes in this data set because it was coming from many locations. I chose to look at two data sets: sales, and ad data. I decided I couldn't use ad data because I didn't know if the geographic placements of these ads were uniform so I had no way of normalizing the data. I ended up joining two tables: sales by user and sales addresses. From here I got a decent idea where our customers were coming from and decided to use ChartJS and topoJSON to create a choropleth map of our geographic sales  "],
        icons:[icons.cloud],

    },
    {
        name:"cafe",
        title:"Cafe Munshn Lunshn ",
        overview:"This project was the basis of my Web Programming class at the University of Kentucky",
        tech:["Throughout the year we were tasked with updating this web page with new features, and new designs. Some of these features: sql-request of menu items and descriptions, JQuery to count how many requests, JSON responses, animations, error handeling  "],
        icons:[icons.html,icons.php,icons.css],

    },
    {
        name:"willitfit",
        title:"WillItFit",
        overview:"I created this project for a hackathon hosted by the University of Kentucky. ",
        tech:["The insiration from this project came from working at an e-commerce company. There were many prize categories, but I decided go with the 'best use for VR. I realized that e-commerce is a fastly growing industry, but it has limitations that show rooms do not. If I wanted to decorate a room traditionaly I would go to the store, find products that matched, and would be able to infer how these items would look in my room. I decided to embed software from one of our sponsers,Echo3D, to create an ecommerce page where users could place the pieces of furniture in the room. The embedded software had its limitations that I was unable to resole. The biggest issue was the objects were blown up to 100%, so literally the objects spaned the whole room."," This gave the appearence that the object was not visible, as the camera was inside the object. "],
        icons:[icons.html,icons.css,icons.echo3D],
    },
    {
        name:"carekit",
        title:"Apple's Care Kit",
        overview:"This health app was the basis of my App development course using Apple's open source Care Kit ",
        tech:["This was a full-stack application that used a MVVM style for development. We were given a sample app with basic functionality, and we were prompted to add features such as: login view and water consumption as assignments. For our final we were taked with adding features and views to our app","I decided to add notification functionality that reminded you to drink water in at a set time interval, a view to manage notifications, and a view to log emotions"],
        icons:[icons.swift],
    },
]
export default projectList
