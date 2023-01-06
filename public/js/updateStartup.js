const login=async (Sid)=>
{
 try{
    const res = await axios({
        method:'PATCH',
        url:'/user/selectStartup',
        data:{Sid}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.create').addEventListener('submit',(e)=>{
    e.preventDefault();
    const Sid = document.getElementById('Sid').value;
   

    login(Sid);
    window.alert("successfully updated !!");
})