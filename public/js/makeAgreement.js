const createStartup = async (
    sId,email,perShareCmp,perShareSin
  ) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/user/makeAgreement",
        data: {  sId,email,perShareCmp,perShareSin },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  document.querySelector(".create").addEventListener("submit", (e) => {
    e.preventDefault();
    const sId = document.getElementById("sId").value;
    const email = document.getElementById("email").value;
    const perShareCmp = document.getElementById("perShareCmp").value;
    const perShareSin = document.getElementById("perShareSin").value;
    
    createStartup(sId,email,perShareCmp,perShareSin);
    window.alert("successfully made agreement!!");
  });
  