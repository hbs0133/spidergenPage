
SlideViewItem1 = class SlideViewItem1 extends AView
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

    // 2번 슬라이드이동
	onSlide2BtnClick(comp, info, e)
	{

        this.owner.slideTo(1)

	}

    // 3번 슬라이드이동
	onSlide3BtnClick(comp, info, e)
	{

	    this.owner.slideTo(2)

	}
}

