const h1 = document.querySelector('.heading');
const heading = 'Please Meet Our Team';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        h1.innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();

