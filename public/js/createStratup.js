const createStartup=async (sname, pstatement ,bModel,baseFund,employemetOpp)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'/user/createStartUp',
        data:{sname, pstatement ,bModel,baseFund,employemetOpp}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.create').addEventListener('submit',(e)=>{
    e.preventDefault();
    const sname = document.getElementById('sname').value;
    const pstatement=document.getElementById('pstatement').value;
    const bModel=document.getElementById('bModel').value;
    const baseFund=document.getElementById('baseFund').value;
    const employemetOpp=document.getElementById('employemetOpp').value;
   

    createStartup(sname, pstatement ,bModel,baseFund,employemetOpp);
    window.alert("successfully applied!!");
})