
SignUpSubView = class SignUpSubView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onsubmitBtnClick(comp, info, e)
	{


        let id = this.idInput.getText();
        let nickName = this.nicknameInput.getText()
        let pw = this.passwordInput.getText();
        let pwConfirm = this.passwordConfirmInput.getText();
        let email = this.emailInput.getText();
        let termsisCheck = this.termsCheck.isChecked;
        let policyTermsisCheck = this.policyTermsCheck.isChecked;
        let emailDomain = this.emailDomainInput.getSelectedItemValue()

        // 유효성 검사
        if (!id) {
            AToast.show('아이디를 입력해주세요');
            return;
        } else if (!/^[a-z0-9]{6,}$/.test(id)) {
            AToast.show('아이디는 영문 소문자와 숫자만 사용하며 6자 이상이어야 합니다.');
            return;
        }
        if (!nickName) {
            AToast.show('닉네임을 입력해주세요');
            return;
        } else if (!/^([가-힣]{2,}|[a-zA-Z0-9]{4,})$/.test(nickName)) {
            AToast.show('닉네임은 한글 2자 이상 또는 영문/숫자 4자 이상이어야 합니다.');
            return;
        }
        if (!pw) {
            AToast.show('비밀번호를 입력해주세요');
            return;
        } else if (pw.length < 6) {
            AToast.show('비밀번호는 6자 이상이어야 합니다.');
            return;
        }
        if (!pwConfirm) {
            AToast.show('비밀번호 확인을 입력해주세요');
            return;
        } else if (pw !== pwConfirm) {
            AToast.show('비밀번호와 비밀번호 확인이 같지 않습니다.');
            return;
        }
        if(!email){
            AToast.show('이메일을 입력해주세요')
            return
        }
        if(emailDomain == none){
            AToast.show('도메인을 선택해주세요')
        }

        if(termsisCheck == null || termsisCheck == false){
            AToast.show('이용약관에 동의해주세요.')
            return
        }
        if(policyTermsisCheck == null || policyTermsisCheck == false){
            AToast.show('개인정보 수집 및 이용에 동의해주세요.')
            return
        }


        // let signUpData = {"id" : id, "nickname" : nickName, "pw" : pw, "email" : email}
        //탭뷰 가져오기
        const tabView = this.owner;
        //mainTab으로 이동
        tabView.selectTabById('mainTab')
        AToast.show('가입이 완료되었습니다.')
		

	}
}

