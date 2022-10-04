$(document).ready(function () {
    $("#search").keypress(function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            inputQuery();
            $(".col").empty();
        }
    })

    $(".btnSearch").click(function (e) {
        e.preventDefault();
        inputQuery();
        $(".col").empty();
    })
    function inputQuery() {
        console.log("skdksldk");
        let input = $("#search").val();
        if (!input == "") {

            searchimage(input);
            $("#search").val("");
        } else {
            alert("Please enter something!");
        }
    }
    function searchimage(input) {
        let url = "https://api.unsplash.com/photos/?query=" + input + "&client_id=lUplwsWBg7FmwBKiinTmEilaiwDL9HvtTIqlQe_fWfk";
        $.ajax({
            method: "GET",
            url: url,
            success: function (data) {
                data.forEach((pic) => {
                    console.log(pic);
                  const {small} = pic.urls;

                  $(".row").append(
                    `
                    <div class="col-6"><img src="${small}" class="img-fluid"></div>
                    `
                  )
                })
            }
        })
    }
})