
test = class test extends AView
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

        this.test.loadContainer(null).then(cntr => {
        const navi = new ANavigator('navi', cntr);

        navi.registerPage('Source/TabSubViews/QnaView.lay', 'QnaPage');
        navi.registerPage('Source/TabSubViews/CommunitySubView.lay', 'CommunityPage')

        navi.goPage('CommunityPage')

    })

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

