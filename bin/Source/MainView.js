MainView = class MainView extends AView
{
	constructor()
	{
		super()

		//모달 스크롤을 막기위한 변수선언
        this.isModalOpen = false;

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

        // RadioBtnManager 생성
        this.rbm = new RadioBtnManager(this);

        this.onTabClick(this.mainTab);
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

// 탭 이동을 위한 탭클릭 함수
    async onTabClick(comp, info , e) {

        const componentId = await comp.getComponentId();

        this.rbm.selectButton(comp);
        this.tabView.selectTabById(componentId);

    }


// 로그인버튼 함수
	onloginBtnClick(comp, info, e)
	{
		let window = new AWindow('loginWindow');
        this.isModalOpen = true;

        window.setWindowOption({
            isModal : true,
            isCenter : true,
            isFocusLostClose : true,
            modalBgOption : "dark",
            overflow : "hidden"
        })

        //onWindowResult를 호출하는 함수.
        window.setResultListener(this);

        //윈도우 open메서드
        window.open('Source/ModalViews/LoginView.lay', null, 0, 0, 'auto', 'auto');

        //모달 스크롤제거
        if(this.isModalOpen){
            this.spidergenPage.setStyle('overflow', 'hidden');
        }else{
            this.spidergenPage.setStyle('overflow', 'visible');
        }



	}

// window의 결과를 받아 실행하는 함수
    onWindowResult(result, data, window){
        this.isModalOpen = false;

        let containerId = window.getContainerId();

        if(containerId == 'loginWindow'){
            if(result == 0){
                AToast.show(`ID : ${data.id} PW : ${data.pw}`)
            };
        };

        // 모달 스크롤생성
        this.spidergenPage.setStyle('overflow', 'visible');
    };

    
}

