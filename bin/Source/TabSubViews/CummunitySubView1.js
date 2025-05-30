
CummunitySubView1 = class CummunitySubView1 extends AView
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

        this.communityNavigator.loadContainer('Source/TabSubViews/CommunitySubView.lay').then(cntr => {
        let navi = new ANavigator('navi', cntr);

        navi.registerPage('Source/TabSubViews/QnaView.lay', 'QnaPage');
        navi.registerPage('Source/TabSubViews/CommunitySubView.lay', 'CommunityPage')
    })

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

