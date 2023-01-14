const sql=require('mysql');
const app = require('./app');

const db=sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"dbmsmini"
});
db.connect((err)=>{
    if(err)
    {
        console.log("error while connecting")
    }
    console.log("connected to database successfully")
})

app.get('/createTable1',(req,res)=>{ const qry='CREATE TABLE TABLE1(id int auto_increment, name varchar(20), class int , primary key(id))'
db.query(qry,(err,res)=>{if(err){throw err}
console.log(res)
})
res.send("table1 created");
}

)



app.listen(8000,()=>{console.log("listining to port 8000")})
module.exports=db;