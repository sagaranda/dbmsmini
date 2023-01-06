const createQuery=async (query,solution)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'/user/createQuery',
        data:{query,solution}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.query1').addEventListener('submit',(e)=>{
    e.preventDefault();
    const query = document.getElementById('query').value;
    const solution=document.getElementById('solution').value;

    createQuery(query,solution);
    window.alert("successfully posted in !!");
})