
    document.getElementsByClassName("ojt")[0].addEventListener("click", changeToOJTContent);

    function updateOJTClass() {

        document.getElementsByTagName("section")[0].setAttribute("class", "yellow new-width-yellow");
        document.getElementsByTagName("section")[1].setAttribute("class", "side-toggle");
        document.getElementsByTagName("section")[2].setAttribute("class", "blue new-width-blue");
        document.getElementsByClassName("toggle-styles")[0].setAttribute("class", "toggle-styles new-toggle-styles-width");
        document.getElementsByClassName("content")[0].setAttribute("class", "content new-content-width")

        document.getElementsByTagName("img")[0].setAttribute("class", "profile-shrink-size");
        document.getElementsByTagName("h1")[0].setAttribute("class", "hidden");
        document.getElementsByTagName("p")[0].setAttribute("class", "hidden");
        document.getElementsByTagName("nav")[0].setAttribute("class", "logo-column");
    }

    function changeToOJTContent() {

        var content =   
                        /*
                            1. Company Profile
                        */

                        "<h2 id=\"companyProfile\" class=\"for-smooth-scrolling\"> Company Profile </h2>" +
                        "<div class=\"ojt-content\">" +

                            // About the Company 

                            "<h3 id=\"about\" class=\"for-smooth-scrolling\"> About the Company </h3>" +
                            "<p class=\"description\">" +
                                "Taters Enterprises, Inc.  is a Filipino restaurant group which handles the brands Taters and " + 
                                "Chimara Neo-Vegan Cafe. Taters is the market leader in movie entertainment snacks and currently " + 
                                "has 26 branches all over the Philippines." +
                            "</p>" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Mission and Vision

                            "<h3 id=\"mission\" class=\"for-smooth-scrolling\"> Mission and Vision </h3>" +
                            "<p class=\"description\">" +
                                "The joint research and development efforts of TATERS and its suppliers continue to create entertainment snack favorites that are quickly-served, " + 
                                "modestly-priced, and higher in nutritional value evidenced by innovations and constant additions to its menu." + 
                                "In all its endeavors, the delivery of quality products and services has always been TATERS' commitment and ultimate goal." +
                            "</p>" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Company Registration

                            "<h3 id=\"registration\" class=\"for-smooth-scrolling\"> Company Registration </h3>" +
                            "<p class=\"description\">" +
                                "The joint research and development efforts of TATERS and its suppliers continue to create entertainment snack favorites that are quickly-served, " + 
                                "modestly-priced, and higher in nutritional value evidenced by innovations and constant additions to its menu." + 
                                "In all its endeavors, the delivery of quality products and services has always been TATERS' commitment and ultimate goal." +
                            "</p>" +
                        "</div>" +

                        /*
                            2. Weekly Progress Report
                        */

                        "<h2 id=\"report\" class=\"for-smooth-scrolling\"> Weekly Progress Report </h2>" +

                        "<div class=\"ojt-content\">" +

                            // Week 1

                            "<h3 id=\"week1\" class=\"for-smooth-scrolling\"> Week 1: Aug. 21 - Aug. 26 </h3>" +
                            "<p class=\"description\">" +
                                "As this was the first week, our supervisor made us do QA testing for the website, where the goal is to find all " + 
                                "the issues, bugs, and adjustments that we need to make for the improvement of the website. We were given a week to do this, " +
                                "and the next day the goal is to present the bugs that we listed and explain how we should make the adjustments. " +
                            "</p>" +
                            "<p class=\"description\">" +
                                "This looked more like a warm-up, before we got on the tidbits of doing full stack web development using React, " +
                                "Typescript, Tailwind, and Code igniter. Our lead also helped us set up the website to run on the localhost, " + 
                                "instructing us to install web technologies that we needed to use." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Within this week, the interns were instructed to review basic concepts of the mentioned web technologies, so " +
                                "that it will be easier for us to code and implement the tasks given to us." + 
                            "</p>" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Week 2

                            "<h3 id=\"week2\" class=\"for-smooth-scrolling\"> Week 2: Aug. 29 - Sept. 2 </h3>" +
                            "<p class=\"description\">" +
                               "This week focused more on distributing the task by fixing bugs and issues. Changes are made mainly for the front-end " +
                               "side on the first few days. I got stuck using react hooks to change content in the UI, although it made me realize " +
                               "the gaps in my knowledge of using React.JS framework. I considered using either useState or useEffect but I " +
                               "couldn’t seem to create a good solution." +

                            "</p>" +
                            "<p class=\"description\">" +
                                "I was able to utilize the useState React Hook effectively when I worked on the forms, although I think " + 
                                "there’s still a lot of time for improvement." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "This week made me picture the overall job of a developer; of how long a seemingly simple task given would " +
                                "take a few hours of solving, considering the overall codebase to the solution you came up with, and " +
                                "re-aligning those solutions to other behavior seen in the webpage." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Reading the documentations of the web technologies used in the website would go a long way as well, as it " +
                                "will prepare a developer of the codes and the tasks given to him." +
                            "</p>" +
                        "</div>" +

                         "<div class=\"ojt-content\">" +

                            // Week 3

                            "<h3 id=\"week3\" class=\"for-smooth-scrolling\"> Week 3: Aug. 29 - Sept. 2 </h3>" +
                            "<p class=\"description\">" +
                               "This week focused on the front-end issues as well, like adding adequate spacing between elements, improving " +
                               "tail wind styling for the pages, and adjustments for the setup of our localhost devices." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "The issue regarding the adjustment of the swiper button components to be vertically aligned took more " + 
                                "hours than I initially assumed. I thought that the button was improperly aligned caused by the swiper " + 
                                "button styling, but it turns out that it only vertically aligns relative to the parent container’s " +
                                "height. When I adjusted the parent’s height, the button appeared to be vertically centered." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Testing was also done this week, to prepare for the presentation of the new page: which is the catering page." +
                            "</p>" +
                        "</div>" + 

                        
                        "<div class=\"ojt-content\">" +

                            // Week 4

                            "<h3 id=\"week4\" class=\"for-smooth-scrolling\"> Week 4: Sept. 12 - Sept. 16 </h3>" +
                            "<p class=\"description\">" +
                                "Considering it was the fourth week, I am more or less adjusted to the environment already; the coding, " +
                                "the issues, the use of git controls for version control, the documentations etc. Same concepts were done " +
                                "this way, where adjustment in the styling was done as listed in the issues by the other interns." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Additionally, we were informed to learn the back-end implementation, specifically UnionBank and Lalamove API integration with the website." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Other front-end issues were addressed as well, such as improving markups and other spacing issues." +
                            "</p>" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Week 5

                            "<h3 id=\"week5\" class=\"for-smooth-scrolling\"> Week 5: Sept. 19 - Sept. 23 </h3>" +
                            "<p class=\"description\">" +
                                "Listed all the pop up messages before presenting the current website to the marketing team. Other issues " +
                                "were  taken care of as well such as adjustments on the text fields for the ordering and checkout page. " +
                                "Features like this are necessary considering the users should be able to edit the fields that they need to edit. " + 
                                "These adjustments are just on the small-scale, and another addition for the issue was to add another text field react component for the delivery address, as stated in issue #130." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Remaining time of this was to take care of the other documents needed for the OJT. An E-portfolio was "  + 
                                "also being built around this time, to further solidify the knowledge that I’ve been acquiring all " +
                                "these months. Pure html, css and javascript were utilized for the said portfolio, and was deployed using github pages." + 
                            "</p>" +
                        "</div>" +

                        /*
                            3. Assessment of the OJT Program
                        */

                        "<h2 id=\"assessment\" class=\"for-smooth-scrolling\"> Assessment of the OJT Program </h2>" +

                        "<div class=\"ojt-content\">" +

                            // What you've learned from this experience 

                            "<h3 id=\"learn\" class=\"for-smooth-scrolling\"> What you've learned from this experience </h3>" +
                            "<p class=\"description\">" +
                                "One of the most fundamental things that I’ve learned from this experience is the importance of " +
                                "working well as a team. Within the group of interns or employees, each one has a task that needs " +
                                "to be done in a certain amount of time. It emphasizes the responsibility each of the workers have to " +
                                "finish the tasks that’s been given to them, as well as communicating with one another to voice out " +
                                "their concerns and ideas to better improve the output." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Secondly, it occurred to me that the effectiveness of creating and building an application or projects " +
                                "is the best way to learn programming. Just being able to get your hands dirty and do some bad code and " +
                                "improve it along the way is most effective. Getting yourself exposed to all sorts of web technologies " +
                                "and integrating them into a project guarantees you to learn the concepts of programming." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Lastly, this internship made me picture out the future that I’m going to have after I graduate. " +
                                "Choosing this as a career means doing codes for eight to nine hours every weekday. It made me realize " +
                                "that I’m starting to get older and I need to start prioritizing my goals, scheduling my day, and " +
                                "taking care of myself physically, mentally, emotionally and financially. I started to see the bigger " +
                                "picture of how I’m going to continue this path as a developer and to start being responsible for the things that I need to do." +
                            "</p>" +
                        "</div>" +

                         "<div class=\"ojt-content\">" +

                            // Important Theories/Concepts acquired from the OJT Station

                            "<h3 id=\"theories\" class=\"for-smooth-scrolling\"> Important Theories/Concepts acquired from the OJT Station </h3>" +
                            "<p class=\"description\">" +
                                "For this internship, it focused on React, Tailwind and Code igniter. React allows the use of " +
                                "component-based programming where you can use, let’s say, a header navigation component and call " +
                                "that component on all of the pages that would need it. This allows modularity, efficient, and " +
                                "easy-to-scale code for programmers to maintain." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Tailwind specializes in creating the classes itself for the css properties, so you don’t have to " +
                                "create an unnecessary number of classes just to style the pages. This allows a more efficient " +
                                "approach and overcomes the limitations of using pure css." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Code igniter framework for PHP largely revolves on using MVC framework or what they call as " +
                                "model-view-controller framework as a guideline in structuring the whole code." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Other than that, we also used git and github for version control, in order to list the issues " +
                                "and assign it to the interns, create branches for specific issues, create pull requests to " +
                                "review the added branch and be able to merge those branches in the main branch." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Last but not the least, we tried QA testing for the website, where the aim was to find all the " +
                                "bugs that we could find so we could fix it. As a QA tester, we need to come up with ways to destroy " +
                                "the website and list how the bugs behave and come to be. By doing so, we are able to come up with solutions to fix those bugs." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "In conclusion, being able to expose myself to these different web technologies are helpful for me to learn and progress in my coding career." +
                            "</p>" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Memorable Event During the Internship Period

                            "<h3 id=\"memorable\" class=\"for-smooth-scrolling\"> Memorable Event During the Internship Period </h3>" +
                            "<p class=\"description\">" +
                                "I wouldn’t exactly say it’s memorable, but I became proud of myself every time I finish a task. At " +
                                "the start of the internship, I had doubts whether or not I could do the tasks, or maybe I might find " +
                                "it difficult to finish them or maybe I would get scolded because I wrote some bad code. But that did " +
                                "not happen. I was able to finish my tasks as early as I can, communicated the concerns that I have " +
                                "with the code and the user interface, and created outputs that I’m proud of." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Realizations like that made me more appreciative of my skills, as someone who wasn’t really that " +
                                "confident of it and rather unconvinced that I can do a good job. It gave me more confidence to " +
                                "take on more difficult tasks and the future projects that I’ll be part of someday." +
                            "</p>" +
                        "</div>" +

                        
                        "<div class=\"ojt-content\">" +

                            // Recommendation for the Improvement of the Internship Program

                            "<h3 id=\"recommendation\" class=\"for-smooth-scrolling\"> Recommendation for the Improvement of the Internship Program </h3>" +
                            "<p class=\"description\">" +
                                "Internship programs are different depending on the companies you’re part of. If there is any " +
                                "recommendation for the internship programs in general relative to the OJT subject in the curriculum, " +
                                "I advise the OJT coordinators and advisers to have an overall assessment of their students’ own " +
                                "internship experience in the company. This would give them an overview of what to improve in the program." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "On the other hand, in my experience interning at Taters Enterprises Inc, it was pretty helpful for me. " + 
                                "I recommend students to intern in this company, as they would allow you to grow on your own by giving " +
                                "you tasks that are out of your comfort zone." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Not knowing much about React and Tailwind, this helped me learn about these web technologies and familiarize myself with the syntax, and how it was used in the project." +
                            "</p>" +
                        "</div>" +

                         "<div class=\"ojt-content\">" +

                            // Advices to those who will be taking the Internship Program in the future

                            "<h3 id=\"advices\" class=\"for-smooth-scrolling\"> Advices to those who will be taking the Internship Program in the future </h3>" +
                            "<p class=\"description\">" +
                               "Try to get an internship related to the field of interest you would like to pursue. This would help " + 
                               "set you up for better opportunities after graduation from college. As someone interested in web " +
                               "development, getting a full-stack web development experience would be a great deal to include in my own resume." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "This would also let you decide if you still want to pursue your current interest, or if you had " +
                                "a change of heart, it would help you explore other fields and focus your attention there instead." +
                            "</p>" +
                            "<p class=\"description\">" +
                                "Take internships as a challenge and an opportunity to learn, this would make the experience more enjoyable, fun and exciting. Use the current knowledge that you have to further intensify and deepen the understanding that you have on different concepts." + 
                            "</p>" +
                        "</div>";

        updateOJTClass();

        document.getElementsByClassName("ojt")[0].innerHTML = "On the Job Training";
        document.getElementsByClassName("content")[0].innerHTML = content;
    }

