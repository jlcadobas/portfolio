
    document.getElementsByClassName("portfolio")[0].addEventListener("click", changeContent);

    function changeContent() {

        var content =   "<div class=\"content-sections\">" +
                            "<header> Macrame Home Decor: makrahangs </header>" +
                            "<a href=\"https://jlcadobas.github.io/makrahangs/\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/macrame.png\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Art Town </header>" +
                            "<a href=\"https://github.com/mnslnln/ART-TOWN\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Art Town.png\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Ian Rankin </header>" +
                            "<a href=\"https://jlcadobas.github.io/rankin-website-tribute/\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/rankin.png\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> SMOL Budgeting App </header>" +
                            "<a href=\"https://github.com/jlcadobas/SMOL\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/smol.png\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Juan Dela Cook </header>" +
                            "<a href=\"https://www.figma.com/file/7oQjXXEyK5QQjeDASIT7Tm/Juan-Dela-Cook\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Juan-Dela-Cook.PNG\"/>" +
                            "</a>" +
                        "</div>" +

                        "<div class=\"content-sections\">" +
                            "<header> Write A Story </header>" +
                            "<a href=\"https://www.figma.com/proto/0Co1H0RHQxtCXluNXOEHWi/Untitled?node-id=0%3A1\" target=\"_blank\">" +
                                "<img class=\"featured-website\" src=\"./images/Write-A-Story.PNG\"/>" +
                            "</a>" +
                        "</div>";
                        
        document.getElementsByClassName("content")[0].innerHTML = content;
    }