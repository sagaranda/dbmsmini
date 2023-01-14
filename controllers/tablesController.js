const sql = require('mysql');
const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbmsmini"
});
const app = require('../app');


exports.createUserTable = (req, res) => {
    const qry = 'CREATE TABLE USER(id int auto_increment, name varchar(20), email varchar(30), phone int(10),roles varchar(20) default "startupInit",password varchar(8),confirmPassword varchar(8), primary key(id))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("user table created");
}

exports.createStartupTable = (req, res) => {
    const qry = 'CREATE TABLE STARTUP(Sid int auto_increment, sname varchar(50), pstatement varchar(200),bModel varchar(100),baseFund int(10) default 0 ,employemetOpp int default 0,FrmId int,selId int default NULL, status int default 0,state varchar(10) default "not-agreed",primary key(sid), foreign key(FrmId) references USER(id),foreign key(selId) references USER(id))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("startup  table created");
}
exports.createQueryTable = (req, res) => {
    const qry = 'CREATE TABLE QUERY(Qid int auto_increment, query varchar(200), solution varchar(200), primary key(Qid))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("query  table created");
}
exports.createQueryMnTable = (req, res) => {
    const qry = 'CREATE TABLE QUERYMN(Qid int , uid int,primary key(Qid), foreign key(Qid) references QUERY(Qid), foreign key(uid) references USER(id))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("querymn  table created");
}
exports.createStartupLocation = (req, res) => {
    const qry = 'CREATE TABLE LOCATION(sid int , location varchar(50), primary key(sid , location), foreign key(sid) references STARTUP(Sid))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("locations  table created");
}


exports.makeAgreement = (req, res) => {
    const qry = 'CREATE TABLE AGREEMENT(aId  int auto_increment,Agreement varchar(1000) default "This is according to company act 2013, where statup initiator and company are abide to the following data.",perShareCmp varchar(3),perShareSin varchar(3) , status int default 0 ,CID int default NULL,siEmail varchar(30),sId int,primary key(aId), foreign key(CID) references USER(id),foreign key(sId) references STARTUP(Sid))'
    db.query(qry, (err, res) => {
        if (err) { throw err }
        console.log(res)
        console.log(qry)
    })
    res.send("locations  table created");
}