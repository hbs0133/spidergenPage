
MainSubView = class MainSubView extends AView
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

        // 슬라이더 아이템 추가
        this.slideView.addItem('Source/SlideViewItems/SlideViewItem1.lay', [1]);
        this.slideView.addItem('Source/SlideViewItems/SlideViewItem2.lay', [2]);
        this.slideView.addItem('Source/SlideViewItems/SlideViewItem3.lay', [3]);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    // 이전슬라이더 버튼함수
	onSlidePrevBtnClick(comp, info, e)
	{
        //무한 슬라이더
        if(this.slideView.inx  != 0){
            this.slideView.slidePrev();
        }else{
            this.slideView.slideTo(2)
        }

	}

    // 다음슬라이더 버튼함수
	onSlideNextBtnClick(comp, info, e)
	{
        //무한 슬라이더
        if(this.slideView.inx != 2){
            this.slideView.slideNext();
        }else{
            this.slideView.slideTo(0)
        }
	}
}

