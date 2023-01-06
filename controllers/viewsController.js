const sql = require("mysql");
const db = sql.createConnection({
  host: "localhost",
  user: "madakari",
  password: "Oo(6D.Ei]@BllnO9",
  database: "dbmsmini",
});
const express=require('express');
const { response } = require("../app");
exports.base=(req,res)=>
{    if(req.cookies.jwt){ res.status(200).render('base');}
    res.status(200).render('login');
}

exports.chat=(req,res)=>
{
    const qry= `SELECT * FROM QUERY q, QUERYMN qm, USER u WHERE  q.Qid=qm.Qid and qm.uid=u.id`
    db.query(qry,(err,response)=>
    {
        if(err)
        {
            console.log(err)
        }
        res.status(200).render('chat',{response});
        
        
    })
    
}
exports.create=(req,res)=>
{
    res.status(200).render('createStartup');
}
exports.login=(req,res)=>
{
    res.status(200).render('login');
}
exports.signup=(req,res)=>
{
    res.status(200).render('signup');
}
exports.query=(req,res)=>
{
    res.status(200).render('query');
}
exports.location=(req,res)=>
{
    const sid = req.params.sid;
    res.status(200).render("location",{sid});
}
exports.viewStartup=(req,res)=>
{
    const qry = `SELECT * FROM USER u , STARTUP s WHERE u.id=s.FrmID`
    db.query(qry,(err,response)=>
    {
        if(err)
        {
            console.log(err)
        }
        res.status(200).render('viewStartup',{response})
        
    })

}
exports.updateStartup=(req,res)=>
{
    
        const Sid= req.params.Sid
        res.status(200).render('select',{Sid})
        
    
}

exports.viewSelectedStartup=(req,res)=>
{
    const qry = `SELECT * FROM USER u ,STARTUP s WHERE u.id=s.FrmID `
    db.query(qry,(err,response)=>
    {
        if(err)
        {
            console.log(err)
        }
        
        res.status(200).render('selectedStartup',{response})
        
    })

}