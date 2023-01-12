const login = async (Sid ,aId) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: "/user/acceptAgreement",
        data: { Sid,aId },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  document.querySelector(".create").addEventListener("submit", (e) => {
    e.preventDefault();
    const Sid = document.getElementById("Sid").value;
    const aId = document.getElementById("aId").value;
  
    login(Sid,aId);
    window.alert("successfully updated !!");
  });
  