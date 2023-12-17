$(document).ready(function() {
    var startTime, endTime;

    $("#startService").click(function() {
        startTime = new Date();
        $("#serviceTime").html("<div class='service-info'>En service depuis : " + startTime.toLocaleTimeString() + "</div>");
    });

    $("#endService").click(function() {
        if (startTime) {
            endTime = new Date();
            var timeDiff = endTime - startTime;
            var seconds = Math.floor(timeDiff / 1000);
            var minutes = Math.floor(seconds / 60);
            seconds %= 60;

            $("#serviceTime").append("<div class='service-info'> 🟩 PDS : " + startTime.toLocaleTimeString() + "</div>" +
                                     "<div class='service-info'> 🟥 FDS: " + endTime.toLocaleTimeString() + "</div>" +
                                     "<div class='service-info'> ⭕️ Totale : " + minutes + " minutes " + seconds + " secondes</div>");

            // Enregistrez ces données sur le serveur (envoyez-les via AJAX à un script PHP, par exemple).
            // Exemple d'envoi de données via AJAX :
            /*
            $.ajax({
                type: "POST",
                url: "saveServiceTime.php",
                data: { startTime: startTime, endTime: endTime, timeDiff: timeDiff },
                success: function(response) {
                    console.log(response);
                }
            });
            */
        } else {
            alert("Veuillez d'abord prendre le service.");
        }
    });
});
