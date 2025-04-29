function countUp(id, target) {
    let current = 0;
    const element = document.getElementById(id);
    const interval = setInterval(() => {
        if (current < target) {
            current++;
            element.textContent = current;
        } else {
            clearInterval(interval);
        }
    }, 20); // Speed of counting
}

window.onload = () => {
    countUp("projects", 135);
    countUp("hours", 225);
    countUp("support", 115);
    countUp("customers", 272);
};
