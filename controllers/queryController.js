const sql = require("mysql");
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbmsmini",
});
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "../config.env" });
exports.createQuery=(req,res)=>
{
    let token;
  
        if(req.cookies.jwt)
        {
          token=req.cookies.jwt;
        }
            let decoded = jwt.verify(
                token,
                "dbmsminiproject@5thsem@cse@cmrit$bengalore&karnataka",
                function (err, decoded) {
                  return decoded.id;
                }
                );
    const qry1=`INSERT INTO QUERY(query,solution) values("${req.body.query}","${req.body.solution}")`
    const qry2=`SELECT Qid FROM QUERY q WHERE q.query="${req.body.query}"`
    // const qry3=`INSERT INTO QUERYMN VALUES()`
    db.query(qry1,(err,response)=>
    {
        if(err)
        {
            console.log(err)
        }})

    db.query(qry2,(err,response)=>
    {
            if(err)
            {
                console.log(err)
            }

    const qry3=`INSERT INTO QUERYMN VALUES(${response[0].Qid},${decoded})`
    db.query(qry3,(err,response2)=>
    {
        if(err)
        {
            console.log(err)
        }})
        
    })

}