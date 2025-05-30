
SlideViewItem2 = class SlideViewItem2 extends AView
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


    // 1번 슬라이드 이동
	onSlide1BtnClick(comp, info, e)
	{

		this.owner.slideTo(0)

	}

    // 3번 슬라이드 이동
	onSlide3BtnClick(comp, info, e)
	{

		this.owner.slideTo(2)

	}
}

