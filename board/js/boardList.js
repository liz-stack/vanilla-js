var listURL = "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/free";
var boardList = [];

let pageSize = 10;
let currentPage = 1;

function previousPage() {
    if (currentPage > 1)
        currentPage--;
    renderTable(currentPage)
}
function nextPage() {
    if ((currentPage * pageSize) < boardList.length)
        currentPage++;
    renderTable(currentPage)
}

function numberOfPages() {
    return Math.ceil(boardList.length / pageSize)
}

document.querySelector('#prevBtn').addEventListener('click', previousPage, false)
document.querySelector('#nextBtn').addEventListener('click', nextPage, false)

async function getBoardList() {
    const res = await fetch(`${listURL}`)
    const lists = await res.json()
    boardList = lists
    console.log(list);
};
getBoardList()