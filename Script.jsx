function showSection(id){
    document.getElementById("home").style.display="none";
    document.querySelectorAll(".content-section").forEach(sec=>{
        sec.style.display="none";
    });
    document.getElementById(id).style.display="block";
}
function goHome(){
    document.getElementById("home").style.display="flex";
    document.querySelectorAll(".content-section").forEach(sec=>{
        sec.style.display="none";
    });
}
const buttons = document.querySelectorAll(".show-answer");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            button.textContent = "Show Answer";
        } else {
            answer.style.display = "block";
            button.textContent = "Hide Answer";
        }
    });
});
