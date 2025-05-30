
QnaListItem = class QnaListItem extends AView
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

    // 질의응답 데이터 설정
    setData(data) {
        // 데이터 구조분해
        const {img, title, nickname, createdAt, replyCount, viewCount, likeCount} = data;

        this.img.setImage(img);
        this.title.setText(title);
        this.nickname.setText(nickname);
        this.createdAt.setText(createdAt);
        this.replyCount.setText(replyCount);
        this.viewCount.setText(viewCount);
        this.likeCount.setText(likeCount);
    }

}

