function submitForm(){
    const firstName=document.getElementById('firstName').value;
    const lastName=document.getElementById('lastName').value;
    const dob=document.getElementById('dob').value;
    const country=document.getElementById('country').value;
    const gender=Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e=>e.value);
    const profession=document.getElementById('profession').value;
    const email=document.getElementById('email').value;
    const mobile=document.getElementById('mobile').value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;

    document.getElementById('form').submit();

    if(!firstName || !lastName || !dob || !country || gender.length===0 || !profession|| !email || !mobile){
        alert('Please fill all the required fields!');
        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (mobile == "" || !regPhone.test(mobile)) {
        alert("Please enter valid phone number.");
        mobile.focus();
        return false;
    }
    return true;

    const resultHtml=`
    <p><strong>First Name</strong> ${firstName}</p>
    <p><strong>Last Name</strong> ${lastName}</p>
    <p><strong>Date of Birth</strong> ${dob}</p>
    <p><strong>Country</strong> ${Country}</p>
    <p><strong>Gender</strong> ${gender.join(', ')}</p>
    <p><strong>Profession</strong> ${profession}</p>
    <p><strong>Email</strong> ${email}</p>
    <p><strong>Mobile Number</strong> ${mobile}</p>
    `;

    document.getElementById('popupResult').innerHtml=resultHtml;
    document.getElementById('popup').style.display='block';

}

function closePopup(){
    document.getElementById('popup').style.display='none';
    document.getElementById('form').reset();
}

function resetForm(){
    document.getElementById('form').reset();
}