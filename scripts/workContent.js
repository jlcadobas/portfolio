
    document.getElementsByClassName("experience")[0].addEventListener("click", changeToWorkContent);

       function updateWorkClasses() {

        document.getElementsByTagName("section")[0].classList.remove("new-width-yellow");
        document.getElementsByTagName("section")[1].setAttribute("class", "hidden");
        document.getElementsByTagName("section")[2].classList.remove("new-width-blue");
        document.getElementsByClassName("toggle-styles")[0].classList.remove("class", "new-toggle-styles-width");
        document.getElementsByClassName("content")[0].classList.remove("new-content-width");

        document.getElementsByTagName("img")[0].setAttribute("class", "display-picture frame margin-top");
        document.getElementsByTagName("h1")[0].setAttribute("class", "name");
        document.getElementsByTagName("p")[0].setAttribute("class", "subtitle");
        document.getElementsByTagName("nav")[0].setAttribute("class", "");
    }

    function changeToWorkContent() {

        var content =   "<div class=\"content-sections adjust-height border\">" +
                            "<header class=\"line-height\">" +
                                "Full-Stack Web Development Intern <br> (250 hrs.) <br>" +
                                "<span>" +
                                    "Taters Enterprises Inc. <br>" +
                                    "Makati" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Utilizing React, Tailwind css and Code Igniter for e-commerce website." +
                                " It allows users to order snacks and it" +
                                " will be delivered to them. </p>" +
                        "</div>" +

                        "<div class=\"content-sections adjust-height border\">" +
                            "<header class=\"line-height\">" +
                                "Front-end Web Development Intern: <br> (300 hrs.) <br>" +
                                "<span>" +
                                    "Datatrends Co. <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Creation of a website for payment processing platform. Content " +
                                "Management System (CMS) was used, particularly Wordpress. </p>" +
                        "</div>" + 

                        "<div class=\"content-sections adjust-height border\">" +
                            "<header class=\"line-height\">" +
                                "Mobile Dev Intern: <br> March - Present <br>" +
                                "<span>" +
                                    "SMOL Budgeting App <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> A budgeting application with React Native." + 
                                " It gives overview, feedback, graphical representation, reports, and transactions" + 
                                " of their spending." + 
                        "</div>" +

                        "<div class=\"content-sections adjust-height border\">" +
                            "<header class=\"line-height\">" +
                                "Software Development Intern <br> (100 hrs.) <br>" +
                                "<span>" +
                                    "Datatrends Co. <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Automation of gathering data based on their categories." + 
                                "It records the tabulated data from a csv file, and stores" + 
                                "the information to a database." + 
                        "</div>";
                       
        updateWorkClasses();

        document.getElementsByClassName("ojt")[0].innerHTML = "OJT";
        document.getElementsByClassName("content")[0].innerHTML = content;
    }