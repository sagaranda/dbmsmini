
const signup=async (name,email,phone,password)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'/user/signup',
        data:{name,email,phone,password}
     })
     console.log(res)
 }catch(err){console.log(err)}


}


document.querySelector('.signup-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone=parseInt(document.getElementById('phone').value);
    const password=document.getElementById('password').value;
    signup(name,email,phone,password);
    window.alert(" you are successfully signed up!!");
})