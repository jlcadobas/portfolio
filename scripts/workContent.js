
    document.getElementsByClassName("experience")[0].addEventListener("click", changeContent);

    function changeContent() {

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
                                "Web Development Intern: <br> (300 hrs.) <br>" +
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
                                "Mobile Dev Intern: March - Present <br>" +
                                "<span>" +
                                    "SMOL Budgeting App <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Creation of a budgeting application, to help users  in handling their money." + 
                                "It gives overview, feedback, graphical representation, reports, and transactions" + 
                                "of their spending. React Native is the framework used." + 
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
                        
        document.getElementsByClassName("content")[0].innerHTML = content;
    }