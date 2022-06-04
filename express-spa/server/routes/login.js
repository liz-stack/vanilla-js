require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require("../../db.js");

router.post('/', (req, res) => {
    const id = req.body.id;

    db.query(`
    SELECT * FROM USERS
    WHERE id  = ${db.escape(id)}
    `,
        (dbErr, dbRes) => {
            if (dbErr) {
                throw dbErr;
                return res.status(500).send({
                    message: dbErr
                });
            }
            if (dbRes.length === 0) {
                return res.status(401).send({
                    message: "존재하지 않는 사용자입니다."
                });
            }
            else {
                bcrypt.compare(req.body.password, dbRes[0]['pw'], (bErr, bRes) => {
                    if (bErr) {
                        throw bErr;
                        return res.status(500).send({
                            message: bErr
                        });
                    }
                    if (bRes) {
                        const currentUser = {
                            uid: dbRes[0]['uid'],
                            id: dbRes[0]['id'],
                            username: dbRes[0]['username']
                        };

                        const accessToken = jwt.sign(currentUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });

                        res.cookie(process.env.COOKIE_NAME, accessToken);

                        return res.status(200).send({
                            message: "로그인 성공",
                            accessToken
                        })
                    }
                    else {
                        return res.status(403).send({
                            message: "아이디나 비밀번호가 일치하지 않습니다."
                        })
                    }
                })
            }
        })
})

module.exports = router;