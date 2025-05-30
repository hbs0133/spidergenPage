CommunityListItem = class CommunityListItem extends AView
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

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)
	}

    setData(data){
        
        //데이터 구조분해
        const { img, title, info, postCount , replyCount , likeCount } = data;

        //데이터 View에 설정
        this.img.setImage(img);
        this.title.setText(title);
        this.info.setText(info);
        this.postCount.setText(postCount);
        this.replyCount.setText(replyCount);
        this.likeCount.setText(likeCount);
    }


    // 아이템 클릭했을시 이동함수
	onCommunityListItemClick(comp, info, e)
	{

        // Navigator설정
        const navi = ANavigator.find('navi');

        navi.goPage('QnaPage');
	}
}

