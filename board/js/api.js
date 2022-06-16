/* const uri = "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/free";
let boards = [];

function getBoardList() {
    fetch(uri)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Unable to get list.", error)
        });
}

getBoardList(); */



function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/free");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['boardId'] + '</td>';
                trHTML += '<td>' + object['category'] + '</td>';
                trHTML += '<td>' + object['title'] + '</td>';
                trHTML += '<td>' + object['userName'] + '</td>';
                trHTML += '<td>' + object['createDate'] + '</td>';
                trHTML += '<td>' + object['modifyDate'] + '</td>';
                trHTML += '<td>' + object['viewCount'] + '</td>';
                trHTML += "</tr>";
            }
            document.getElementById("boardList").innerHTML = trHTML;
        }
    };
}

loadTable();    