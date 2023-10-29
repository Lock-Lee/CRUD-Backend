import { Request, Response } from 'express';

import db from "../config/connectDB";

export const createUser = (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    let sql = `INSERT INTO user (username,email,password) VALUES
    ('${username}','${email}','${password}');
    `
    
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                    data: [],
                    message: err.message,
                    required:false
            });
        } else {
            res.status(201).json({
                    data: [],
                    message: "Success",
                    required:true
            });
        }

    })
}
export const updateUser = (req: Request, res: Response) => {
    const { id, username, email, password } = req.body;

    
    let sql = `UPDATE user SET
     username = '${username}',
     email = '${email}',
     password = '${password}'
     WHERE id = '${id}'   
     `
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required:false

            });
        } else {
            res.status(201).json({

                data: [],
                message: "Success",
                required:true

            });
        }

    })
}
export const delteUser = (req: Request, res: Response) => {
    const { id } = req.body;
  
    
    let sql = `DELETE FROM user  WHERE id = ${id} `
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required:false
            });
        } else {
            res.status(201).json({
                    data: [],
                    message: "Success",
                    required:true
            });
        }

    })
}
export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    let sql = `SELECT * FROM user WHERE id = '${id}'`
    
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                    data: [],
                    message: err.message,
                    required:false
            });
        } else {
            res.status(200).json({
                    data: rows,
                    message: "Success",
                    required:true
            });
        }

    })
}
export const getAllUsers = (req: Request, res: Response) => {
    let sql = `SELECT * FROM user `
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                    data: [],
                    message: err.message,
                    required:false
            });
        } else {
            res.status(200).json({
                    data: rows,
                    message: "Success",
                    required:true
            });
        }

    })
}