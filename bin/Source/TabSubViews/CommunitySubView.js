
// 재귀로드를 막기위한 전역변수선언
let isLoaded = false;

CommunitySubView = class CommunitySubView extends AView
{
	constructor()
	{
		super()
        
		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

        // 커뮤니티리스트 Mock데이터
		this.communityListData = [
            {img: "Assets/ic_answer.png", title : "질의응답", info : "개발에 대해서 궁금한 무엇이든 물어보고 공유하세요", postCount : 28, replyCount : 37, likeCount : 3},
            {img: "Assets/ic_error.png", title : "오류 및 개선", info : "오류 제보 및 개선사항을 알려주세요", postCount : 14, replyCount : 14, likeCount : 10}
        ]

        // 공지사항리스트 Mock데이터
        this.noticeData = [
            {notice : "스파이더젠 3.0 버전 출시"},
            {notice : "스파이더젠 2.3.1 Mac OS버전 출시"},
            {notice : "본사 이전 안내"},
            {notice : "신주발행공고"},
            {notice : "스파이더젠 홈페이지 리뉴얼"},
        ]

	}

	onInitDone()
	{
		super.onInitDone()
    // 리스트뷰 리스트추가
	this.communityListView.addItem('Source/ListViewItems/CommunityListItem.lay', this.communityListData)
    this.noticeListView.addItem('Source/ListViewItems/NoticeListItem.lay', this.noticeData)



 
    // 재귀로드를 막기위한 조건문
    if(!isLoaded){
        this.communityPage.loadContainer('Source/TabSubViews/CommunitySubView.lay').then(cntr => {
         let navi = new ANavigator('navi', cntr);
        navi.registerPage('Source/TabSubViews/QnaView.lay', 'QnaPage');
        navi.registerPage('Source/TabSubViews/CommunitySubView.lay', 'CommunityPage')

        isLoaded = true;


        console.log(navi)

    })
    }

    





	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

