require('dotenv').config();

const express = require('express');
const router = express.Router();

const db = require('../db.js');


router.get('/', (req, res) => {

    db.query(`
        SELECT title FROM board
    `, (dbErr, dbRes) => {
        if (dbErr) {
            // db 쿼리문에서 에러가 발생한다면
            throw dbErr;
            return res.status(500).send({
                message: dbErr
            });
        }

        if (dbRes.length === 0) {
            return res.status(200).send({
                message: "게시물이 존재하지 않습니다."
            });
        }

        else {
            return res.status(200).send({
                message: "게시물들을 성공적으로 불러왔습니다."
            });
        }
    });
});

module.exports = router;