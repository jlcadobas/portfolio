
    document.getElementsByClassName("ojt")[0].addEventListener("click", changeToOJTContent);

    function updateOJTClass() {

        document.getElementsByTagName("section")[0].setAttribute("class", "yellow new-width-yellow");
        document.getElementsByTagName("section")[1].setAttribute("class", "side-toggle");
        document.getElementsByTagName("section")[2].setAttribute("class", "blue new-width-blue no-scrollbar::-webkit-scrollbar no-scrollbar");
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
                            "<img src=\"../images/Taters Enterprise Inc. - Company Profile.jpg\" width=\"500\" height=\"500\"></img>" + 
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
                            "<img src=\"../images/Taters Enterprise Inc. - SEC Registration.jpg\" width=\"290\" height=\"450\"></img>" +
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
                                "Other front-end issues were addressed as well, such as improving markups, padding, margins and whitespace usage." +
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
                        "</div>" +

                        /*
                            4. Evidences
                        */

                        "<h2 id=\"evidence\" class=\"for-smooth-scrolling\"> Evidences </h2>" +

                        "<div class=\"ojt-content\">" +

                            // Signed Recommendation Letter

                            "<h3 id=\"signed\" class=\"for-smooth-scrolling\"> Signed Recommendation Letter </h3>" +                          
                            "<img src=\"../images/Adobas - Endorsement Letter.jpg\" width=\"290\" height=\"450\" />" +
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            // Acceptance Letter

                            "<h3 id=\"acceptance\" class=\"for-smooth-scrolling\"> Acceptance Letter </h3>" +                            
                            "<img src=\"../images/Adobas -Acceptance Letter.jpg\" width=\"290\" height=\"450\" />" +
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            // Waiver Form

                            "<h3 id=\"waiver\" class=\"for-smooth-scrolling\"> Waiver Form </h3>" +
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

                            //  MOA / MOU

                            "<h3 id=\"moa\" class=\"for-smooth-scrolling\"> MOA / MOU </h3>" +
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

                            //  Certificate of Completion

                            "<h3 id=\"completion\" class=\"for-smooth-scrolling\"> Certificate of Completion </h3>" +
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

                            //  Certificate of Webinars Attended

                            "<h3 id=\"webinar\" class=\"for-smooth-scrolling\"> Certificate of Webinars Attended </h3>" +
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

                            //  Exploratory Discussions

                            "<h3 id=\"discussions\" class=\"for-smooth-scrolling\"> Exploratory Discussions </h3>" +
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

                            //  Supporting Pictures : 1st

                            "<h3 id=\"pictures\" class=\"for-smooth-scrolling\"> Supporting Pictures </h3>" +
                            "<p class=\"description\">" +
                                "<strong> 08/22/2022 - 08/26/2022 </strong> As this was the first week, our supervisor made us do QA testing for the website, where the goal is to find all " + 
                                "the issues, bugs, and adjustments that we need to make for the improvement of the website. We were given a week to do this, " +
                                "and the next day the goal is to present the bugs that we listed and explain how we should make the adjustments. " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/First/1-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-3.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-4.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-5.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-6.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/First/1-7.PNG\" />" +                                                       
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures: 2nd 

                            "<p class=\"description\">" +
                                "<strong> 08/29/2022 - 09/02/2022 </strong> Resolved issue 15 and 21: (15) Added bottom padding on the franchising page " + 
                                "(21) Added Continue with mobile Button, 08/31/2022 Created and tried to add the sign in modal with the ‘continue with mobile’ button. Use React Hooks to change content in the UI. " +
                                "09/01/2022 I was able to successfully useState with ReactJs to dynamically change the content of the form depending on the tab. 09/02/2022 Fixed issues on the form where the close button is outside the form. Also changed the mobile number input field and use phone field import from React.js " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Second/2-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-3.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-4.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-5.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-6.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Second/2-7.PNG\" />" +                                                       
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 3rd

                            "<p class=\"description\">" +
                                "<strong> 09/05/2022 - 09/09/2022 </strong> 09/05/2022 Downgraded xampp and managed the setup for my local device, where some buttons and images are not properly displayed in the localhost. 09/06/2022 Minimized navigation height for some pages. " + 
                                "09/07/2022 Fixed an issue where the swiper navigation component is not vertically-aligned. I found out that it is automatically vertically aligned, only in relation to its parent element. Therefore, adjusting the parent container’s height solves the problem. " +
                                "09/08/2022 - 09/09/2022 Our lead assigned us to do QA testing for the new Taters catering page. Issues were enumerated on GitHub, as preparation for the demo with the marketing team. " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Third/3-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Third/3-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Third/3-3.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Third/3-4.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Third/3-5.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Third/3-6.PNG\" />" +
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 4th

                            "<p class=\"description\">" +
                                "<strong> 09/12/2022 - 09/16/2022 </strong> 09-12-2022 The team was assigned to briefly learn UnionBank and Lalamove API for back-end integration for the future weeks.  " + 
                                "09-13-2022 Improved markups, spelling and punctuations. Added anchor tags to redirect users to a useful link. 09-14-2022 Adjusted height container to display all texts inside the find us section. " +
                                "09-15-2022 and 09-16-2022 Added desired padding for the find us section. " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-3.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-4.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-5.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fourth/4-6.PNG\" />" +
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 5th

                            "<p class=\"description\">" +
                                "<strong> 09/19/2022 - 09/23/2022 </strong> Listed all the pop up messages before presenting the current website to the marketing team. " + 
                                "Resolved another issue where the text field react component cannot be edited, also added another field for delivery address. " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Fifth/5-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fifth/5-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Fifth/5-3.PNG\" />" +
                        "</div>" +
                        
                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 6th

                            "<p class=\"description\">" +
                                "<strong> 09/26/2022 - 09/30/2022 </strong> 09/26/22 Fixed a bug where an extra scrollbar appears in the store visited modal." + 
                                "09/27/22 Sorted out search store results. 09/28/22 Removed audit and remark logs at catering page. 09/29/22 Proposed UI for popclub deals. " +
                                "09/30/22 Implemented design number 3. " +
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-2.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-3.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-4.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-5.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-6.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-7.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Sixth/6-8.PNG\" />" +                                
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 7th

                            "<p class=\"description\">" +
                                "<strong> 10/03/2022 - 10/07/2022 </strong> 10/03-07/22 Pushed the implementation of design 3. Created an issue where the search suggestion input floats on top or below the input." +                                 
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Seventh/7-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Seventh/7-2.PNG\" />" +                                
                        "</div>" +

                        "<div class=\"ojt-content\">" +

                            //  Supporting Pictures : 8th

                            "<p class=\"description\">" +
                                "<strong> 10/10/2022 - 10/12/2022 </strong> 10/03-07/22 Pushed the implementation of design 3. Created an issue where the search suggestion input floats on top or below the input." +                                 
                            "</p>" +
                                "<img src=\"../images/Weekly Documentation/Eight/8-1.PNG\" />" +
                                "<img src=\"../images/Weekly Documentation/Eight/8-2.PNG\" />" +                                
                        "</div>"; 

        updateOJTClass();

        document.getElementsByClassName("ojt")[0].innerHTML = "On the Job Training";
        document.getElementsByClassName("content")[0].innerHTML = content;
    }

