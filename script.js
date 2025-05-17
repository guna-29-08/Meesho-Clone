
{
    const reveal = document.getElementById('reveal');

    reveal.addEventListener("mouseover", () => {
        reveal.style.display = 'block';
    });

    reveal.addEventListener("mouseout", () => {
        reveal.style.display = 'none';
    });

    document.getElementById('key').addEventListener("mouseover", () => {
        reveal.style.display = 'block';
    });

    document.getElementById('key').addEventListener("mouseout", () => {
        reveal.style.display = 'none';
    });
}



{
    const reveal1 = document.getElementById('reveal1');

    reveal1.addEventListener("mouseover", () => {
        reveal1.style.display = 'block';
    });

    reveal1.addEventListener("mouseout", () => {
        reveal1.style.display = 'none';
    });

    document.getElementById('key1').addEventListener("mouseover", () => {
        reveal1.style.display = 'block';
    });

    document.getElementById('key1').addEventListener("mouseout", () => {
        reveal1.style.display = 'none';
    });
}

{
    const reveal2 = document.getElementById('reveal2');

    reveal2.addEventListener("mouseover", () => {
        reveal2.style.display = 'block';
    });

    reveal2.addEventListener("mouseout", () => {
        reveal2.style.display = 'none';
    });

    document.getElementById('key2').addEventListener("mouseover", () => {
        reveal2.style.display = 'block';
    });

    document.getElementById('key2').addEventListener("mouseout", () => {
        reveal2.style.display = 'none';
    });
}

const profile1 = document.getElementById('profile1');

profile1.addEventListener("mouseover", () => {
    profile1.style.display = 'block';
});

profile1.addEventListener("mouseout", () => {
    profile1.style.display = 'none';
});

document.getElementById('pro').addEventListener("mouseover", () => {
    profile1.style.display = 'block';
});

document.getElementById('pro').addEventListener("mouseout", () => {
    profile1.style.display = 'none';
});


const reveal4 = document.getElementById('reveal4');

reveal4.addEventListener("mouseover", () => {
    reveal4.style.display = 'block';
});

reveal4.addEventListener("mouseout", () => {
    reveal4.style.display = 'none';
});

document.getElementById('key5').addEventListener("mouseover", () => {
    reveal4.style.display = 'block';
});

document.getElementById('key5').addEventListener("mouseout", () => {
    reveal4.style.display = 'none';
});

const reveal5 = document.getElementById('reveal5');

reveal5.addEventListener("mouseover", () => {
    reveal5.style.display = 'block';
});

reveal5.addEventListener("mouseout", () => {
    reveal5.style.display = 'none';
});

document.getElementById('key6').addEventListener("mouseover", () => {
    reveal5.style.display = 'block';
});

document.getElementById('key6').addEventListener("mouseout", () => {
    reveal5.style.display = 'none';
});


const reveal6 = document.getElementById('reveal6');

reveal6.addEventListener("mouseover", () => {
    reveal6.style.display = 'block';
});

reveal6.addEventListener("mouseout", () => {
    reveal6.style.display = 'none';
});

document.getElementById('key7').addEventListener("mouseover", () => {
    reveal6.style.display = 'block';
});

document.getElementById('key7').addEventListener("mouseout", () => {
    reveal6.style.display = 'none';
});

const reveal7 = document.getElementById('reveal7');

reveal7.addEventListener("mouseover", () => {
    reveal7.style.display = 'block';
});

reveal7.addEventListener("mouseout", () => {
    reveal7.style.display = 'none';
});

document.getElementById('key8').addEventListener("mouseover", () => {
    reveal7.style.display = 'block';
});

document.getElementById('key8').addEventListener("mouseout", () => {
    reveal7.style.display = 'none';
});




function verifyOTP() {
    const otpInput = document.getElementById("otpInput").value;
    const correctOTP = "123456";

    if (otpInput === correctOTP) {
        document.getElementById('error').innerHTML = ' '
        document.getElementById('sucess').innerHTML = 'verification Sucessfull'
    } else {
        document.getElementById('sucess').innerHTML = ' '
        document.getElementById('error').innerHTML = 'Please Enter Valid OTP'

    }
}
















