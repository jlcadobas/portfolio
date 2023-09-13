
    document.getElementsByClassName("portfolio")[0].addEventListener("click", changeToPortfolioContent);

    // function updatePortfolioClasses() {

    //     // document.getElementsByTagName("section")[0].classList.remove("new-width-yellow");
    //     // document.getElementsByTagName("section")[1].setAttribute("class", "hidden");
    //     // document.getElementsByTagName("section")[2].classList.remove("new-width-blue");
    //     // document.getElementsByClassName("toggle-styles")[0].classList.remove("class", "new-toggle-styles-width");
    //     // document.getElementsByClassName("content")[0].classList.remove("new-content-width");

    //     // document.getElementsByTagName("img")[0].setAttribute("class", "display-picture frame margin-top");
    //     // document.getElementsByTagName("h1")[0].setAttribute("class", "name");
    //     // document.getElementsByTagName("p")[0].setAttribute("class", "subtitle");
    //     // document.getElementsByTagName("nav")[0].setAttribute("class", "");
    // }

    function changeToPortfolioContent() {

        var content =   "<div class=\"content-sections\">" +
                            "<header> ellioeo </header>" +
                            "<a href=\"http://ellioeo.infinityfreeapp.com\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/ellioeo.png\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> AppointPet </header>" +
                            "<a href=\"https://github.com/VoidFrancescaCruz/AppointPet-App/tree/master3\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/AppointPet.PNG\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Write A Story </header>" +
                            "<a href=\"https://www.figma.com/file/0Co1H0RHQxtCXluNXOEHWi/Write-A-Story?node-id=0%3A1&t=Pr3yUQt7FdhOdPQA-1\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Write-A-Story.PNG\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Juan Dela Cook </header>" +
                            "<a href=\"https://www.figma.com/file/7oQjXXEyK5QQjeDASIT7Tm/Juan-Dela-Cook\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Juan-Dela-Cook.PNG\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Melodify </header>" +
                            "<a href=\"https://www.figma.com/file/4xlbKLLXFW0r3llWo0hFsc/Melodify?node-id=0%3A1&t=dqSbdgIWNjJZsFx6-1\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Melodify.jpg\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> SMOL Budgeting App </header>" +
                            "<a href=\"https://www.figma.com/file/FNNtCgJW26zXAzCioX8wxz/SMOL-Budgeting-App?node-id=54%3A459&t=gTrl9pEHj4b9bwMv-1\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/smol.png\"/>" +
                            "</a>" +
                        "</div>";
    
        // updatePortfolioClasses();

        // document.getElementsByClassName("ojt")[0].innerHTML = "OJT";
        document.getElementsByClassName("content")[0].innerHTML = content;
    }
