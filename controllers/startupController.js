const sql = require("mysql");
const jwt = require("jsonwebtoken");
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbmsmini",
});

exports.createStartUp = async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  let decoded = jwt.verify(
    token,
    "dbmsminiproject@5thsem@cse@cmrit$bengalore&karnataka",
    function (err, decoded) {
      return decoded.id;
    }
  );

  qry = `INSERT INTO STARTUP( sname, pstatement ,bModel,baseFund,employemetOpp,FrmId ) values("${req.body.sname}","${req.body.pstatement}","${req.body.bModel}","${req.body.baseFund}","${req.body.employemetOpp}",${decoded})`;
  db.query(qry, (err, response) => {
    if (err) {
      throw err;
    }
    res.status(200).json({ status: "success", data: { response } });
  });
};
exports.updateStartUpLoc = async (req, res) => {
  qry = `INSERT INTO LOCATION( sid,location ) values(${req.body.sid},"${req.body.location}")`;
  db.query(qry, (err, response) => {
    if (err) {
      throw err;
    }
    res.status(200).json({ status: "success", data: { response } });
  });
};
exports.updateStartup = (req, res) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  let decoded = jwt.verify(
    token,
    "dbmsminiproject@5thsem@cse@cmrit$bengalore&karnataka",
    function (err, decoded) {
      return decoded.id;
    }
  );
  const qry = `UPDATE  STARTUP SET status=1,selId=${decoded} WHERE Sid=${req.body.Sid}`;
  db.query(qry, (err, response) => {
    if (err) {
      console.log(err);
    }
  });
};
exports.makeAgreement=async(req,res)=>
{
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  let decoded = jwt.verify(
    token,
    "dbmsminiproject@5thsem@cse@cmrit$bengalore&karnataka",
    function (err, decoded) {
      return decoded.id;
    }
  );
  const qry=`INSERT INTO AGREEMENT(perShareCmp,perShareSin,cId,siEmail,sId) VALUES("${req.body.perShareCmp}","${req.body.perShareSin}",${decoded},"${req.body.email}",${req.body.sId})`
  db.query(qry, (err, response) => {
    if (err) {
      console.log(err);
    }
  });
}
exports.acceptAgreemet=async(req,res)=>
{
  const qry=`UPDATE AGREEMENT SET status=1 WHERE aId=${req.body.aId}`
  db.query(qry, (err, response) => {
    if (err) {
      console.log(err);
    }
  });

  const qry2=`UPDATE STARTUP SET state="agreed" WHERE sid=${req.body.Sid}`
  db.query(qry2, (err, response) => {
    if (err) {
      console.log(err);
    }
  });
}