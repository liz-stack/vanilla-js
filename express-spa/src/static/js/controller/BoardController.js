import { navigateTo } from "../index.js";

const getLiElement = (value) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerText = value;

    li.append(span);

    return li;
}


const getBoardList = async (div__boarList) => {
    const boardListPath = `${location.origin}/`;
    await fetch(boardListPath)
        .then((data) => {
            data.json().then((boards) => {
                const lists = boards.boardList;
                lists.forEach((board) => {


                    div__boarList.appendChild(li);
                });
            });
        })
        .catch((err) => {
            throw err;
            console.log(err);
        });
}

export { getBoardList };