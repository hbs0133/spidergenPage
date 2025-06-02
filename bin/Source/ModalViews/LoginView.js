
LoginView = class LoginView extends AView
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


	onBtnSubmitClick(comp, info, e)
	{

		let id = this.inputId.getText();
        let pw = this.inputPw.getText();

        if(!id){
            AToast.show('아이디를 입력해주세요')
            return
        }
        if(!pw){
            AToast.show('비밀번호를 입력해주세요')
            return
        }

        let data = {"id" : id, "pw" : pw}

        this.getContainer().close(0, data)

        console.log(this.owner.getParent().findCompById('tabView'))

        // mainView의 TabView가져오기
        const tabView = this.owner.getParent().findCompById('tabView')

        // mainView로 이동
        tabView.selectTabById('mainTab')


	}

	onCloseBtnClick(comp, info, e)
	{

		//TODO:edit here

        this.getContainer().close();

        

	}
}

