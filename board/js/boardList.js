var listURL = "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/free";

var listData = [];
var listCount = 0;

const pageSize = 10;
let curPage = 1;


async function renderTable(page = 1) {
    await getBoardList()

    if (page == 1) {
        prevBtn.style.visibility = "hidden"
    } else {
        prevBtn.style.visibility = "visible"
    }

    if (page == numberOfPages) {
        nextBtn.style.visibility = "hidden"
    } else {
        nextBtn.style.visibility = "visible"
    }


    // create html
    var trHtml = "";
    listData.filter((row, index) => {
        let start = (curPage - 1) * pageSize;
        let end = curPage * pageSize;
        if (index >= start && index < end) return true;
    }).forEach(list => {
        trHtml += "<tr>";
        trHtml += `<td> ${list.category}</td>`;
        trHtml += `<td> ${list.title} </td>`;
        trHtml += `<td> ${list.userName}</td>`;
        trHtml += `<td> ${list.createDate}</td>`;
        trHtml += `<td> ${list.modifyDate}</td>`;
        trHtml += `<td> ${list.viewCount}</td>`;
        "<tr>";
    });
    document.getElementById("list").innerHTML = trHtml;
}



function previousPage() {
    if (curPage > 1)
        curPage--;
    renderTable(curPage)
}
function nextPage() {
    if ((curPage * pageSize) < listData.length)
        curPage++;
    renderTable()
}
renderTable()

function numberOfPages() {
    return Math.ceil(listData.length / pageSize)
}



document.querySelector('#prevBtn').addEventListener('click', previousPage, false)
document.querySelector('#nextBtn').addEventListener('click', nextPage, false)


//Fetch Data from API
async function getBoardList() {
    const response = await fetch(listURL)
    const json = await response.json()
    listData = json.boardList
    listCount = json.boardList.length
    console.log(listData)
    console.log(listCount)
}