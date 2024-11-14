function submitFeedback(){

    alert("Thank you for your valuable feedback!");

    /* read input from dom */
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedbackText = document.getElementById("feedbackText").value;
    const experienceText = document.getElementById("experienceText").value;

    /*place the values in the information panel*/
    document.getElementById("userName").innerHTML = name;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedbackText;
    document.getElementById("userExperience").innerHTML = experienceText;

    /*make information panel active*/
    document.getElementById("userInfo").style.display = 'block';
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = submitFeedback;
/*also process when enter button is pressed*/
document.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        submitFeedback();
    }
});
