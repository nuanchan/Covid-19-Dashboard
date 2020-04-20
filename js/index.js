$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = 
            `<tr>
                <th scope="row">${no}</th>
                    <td>
                        <a href="country.html?country=${country}">${country}</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
            </tr>`;

            $("#data").append(row);
            no++;

        }

    });





})