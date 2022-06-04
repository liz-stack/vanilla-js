import { navigateTo } from "../index.js";

const getBoardList = async (boardList) => {
    const boardListPath = `${location.origin}`;
    await fetch(boardListPath)
        .then((data) => {
            data.then((boards) => {
                const lists = boards.boardList;
                lists.array.forEach((board) => {

                    const li = getLiElement(board.title);

                    li.addEventListenr('click', (event) => {
                        console.log("boardDetail clicked!!");
                    })
                    boardList.appendChild(li);
                });
            })
        })
        .catch((error) => {
            throw error;
            console.log(error);
        })
}