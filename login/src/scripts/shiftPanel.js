export function shiftPanel(type){
    const panel = document.querySelector(".login-cover");

    if(type === 'Login' && !panel.classList.contains('right')){
        panel.style.transform = "translateX(35rem)";
        panel.classList.add('right');
        panel.classList.remove('left')
    } else if(type === 'Sign Up' && !panel.classList.contains('left')){
        panel.style.transform = "translateX(-35rem)";
        panel.classList.add('left');
        panel.classList.remove('right');
    } else {
        panel.style.transform = "translateX(0)";
        panel.classList.remove('right', 'left');
    }
}
