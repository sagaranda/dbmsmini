const login=async (sid,location)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'/user/updateStartUpLocation',
        data:{sid,location}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.location').addEventListener('submit',(e)=>{
    e.preventDefault();
    const sid= document.getElementById('sid').value;
    const location=document.getElementById('location').value;

    login(sid,location);
    window.alert("successfully added !!");
})