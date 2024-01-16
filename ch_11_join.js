
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // 기존 기능 차단.
    let userId = e.target.id.value;
    // console.log(userId);
    let userPw1 = e.target.pw1.value;
    let userPw2 = e.target.pw2.value;
    let userName = e.target.name.value;
    let userPhone = e.target.phone.value;
    let userPosition = e.target.position.value;
    let userGender = e.target.gender.value;
    let userEmail = e.target.email.value;
    let userIntro = e.target.intro.value;

   //console.log(userId, userPw1, userPw2, userName,
        //userPhone, userPosition, userGender, userEmail, userIntro)

    if(userId.length < 6){
        alert('아이디가 너무 짧습니다. 6자이상 입력해 주세요')
        return;
    }
    if(userPw1 !== userPw2){
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }
    let content = `<p> ${userId}님 환영홥니다.<br>
                    회원 가입 시 입력 하신 내역은 다음과 같습니다.<br>
                    아이디 : ${userId}<br>
                    이름 : ${userName}<br>
                    전화번호 : ${userPhone}<br>
                    원하는 직무 : ${userPosition}</p>`;
    document.body.innerHTML = content; 
});
