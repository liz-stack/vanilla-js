
function getBoardList() {
    fetch("https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/free").then((data) => {
        return data.json();
    }).then((res) => {
        console.log(res[0].boardId);
        let boardCount = 0;
        let boardList = "";
        res.map((values) => {
            boardList += `<tr>
        <td>${values.category}</td>
        <td><a href="/boards/detail?id=${values.boardId}>${values.title}</a></td>
        <td>${values.userName}</td>
        <td>${values.createDate}</td>
        <td>${values.modifyDate}</td>
        <td>${values.viewCount}</td>
        </tr>`;
        })
        document.getElementById("boardList").innerHTML = boardList;
    }).catch((err) => {
        console.log(err);
    })

};


getBoardList();
