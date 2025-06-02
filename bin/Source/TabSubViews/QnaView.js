
QnaView = class QnaView extends AView
{
	constructor()
	{
		super()

		this.listHeight

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

        //질의응답 Mock데이터
		this.qnaListData = [
            {img : "Assets/ic_profile.png", title : "스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능", nickname : "kisung123", createdAt : "2024/09/04", replyCount : 1, viewCount : 134, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "단축키 질문", nickname : "개굴", createdAt : "2024/05/31", replyCount : 1, viewCount : 137, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "3.3 이상의 버전들에 관해", nickname : "RuineLife", createdAt : "2024/02/26", replyCount : 1, viewCount : 211, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "stock 컴포넌트 차트 그리기 관련 예제", nickname : "무우옹오앙앙", createdAt : "2023/03/23", replyCount : 1, viewCount : 191, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "최신 API 문서 제공 문의", nickname : "ckdv", createdAt : "2023/03/09", replyCount : 1, viewCount : 136, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "Tomcat 구동 문의", nickname : "KKKKKKKKK", createdAt : "2023/01/13", replyCount : 1, viewCount : 138, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "css code 문의", nickname : "두가", createdAt : "2023/01/01", replyCount : 3, viewCount : 167, likeCount : 1},
            {img : "Assets/ic_profile.png", title : "MS Office 엑셀 파일 다운로드 컴포넌트가 제공 되나요?", nickname : "야곱", createdAt : "2022/11/23", replyCount : 2, viewCount : 106, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "글자(font) size 에 대해서 문의 합니다.", nickname : "야곱", createdAt : "2022/11/23", replyCount : 2, viewCount : 78, likeCount : 0},
            {img : "Assets/ic_profile.png", title : "스파이더젠 테마 관련", nickname : "aawlwaa", createdAt : "2022/11/23", replyCount : 1, viewCount : 123, likeCount : 0},
        
        
        ]
	}

	async onInitDone()
	{
		super.onInitDone()

        //질의응답리스트추가
        await this.qnaListView.addItem('Source/ListViewItems/QnaListItem.lay', this.qnaListData);

        //질의응답 총개수 추가
        this.count.setText(this.qnaListData.length)

        // 리스트가 추가된 리스트의 높이 가져오기
        this.listHeight = this.qnaListView.getHeight()

        //naviContainer를 선언하는 상위 communitySubView를 가져오기
        const communitySubView = this.owner.getParent().owner

        //QnaView에 맞게 높이 조절 (250은 list에 여윳값)
        communitySubView.setHeight(this.listHeight + 250)
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)



	}

}

