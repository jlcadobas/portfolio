
    document.getElementsByClassName("experience")[0].addEventListener("click", changeContent);

    function changeContent() {

        var content =   "<div class=\"content-sections border\">" +
                            "<header class=\"line-height\">" +
                                "Software Development Intern (100 hrs.) <br>" +
                                "<span>" +
                                    "Datatrends Co. <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Automation of gathering data based on their categories. " +
                                "It records the tabulated data from a csv file, and stores" +
                                "the information to a database. </p>" +
                        "</div>" +

                        "<div class=\"content-sections border\">" +
                            "<header class=\"line-height\">" +
                                "Web Development Intern: (300 hrs.) <br>" +
                                "<span>" +
                                    "Datatrends Co. <br>" +
                                    "Quezon City" +
                                "</span>" + 
                            "</header>" +
                            "<p class=\"text-indent\"> Creation of a website for payment processing platform. Content " +
                                "Management System (CMS) was used, particularly Wordpress. </p>" +
                        "</div>" + 

                        "<div class=\"content-sections border\">" +
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

                        "<div class=\"content-sections border\">" +
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
                        "</div>";
                        
        document.getElementsByClassName("content")[0].innerHTML = content;
    }