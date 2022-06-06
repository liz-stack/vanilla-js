require('dotenv').config();

const express = require('express');
const router = express.Router();

const db = require('../db.js');

router.get('/', (req, res) => {
    db.query(`
    SELECT * FROM myboard
    ORDER BY board_id
    `,
        (err, result) => {
            if (err) { //DB에서 불러오는데 오류
                throw err;
                return res.status(500).send({
                    message: "게시물을 불러오는 데 실패하였습니다."
                })
                console.log(err);
            } else { //성공시
                const boardList = result;

                return res.status(200).send({
                    message: "게시물을 성공적으로 불러왔습니다.",
                    boardList
                })
            }

        })
})

module.exports = router;