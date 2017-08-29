page = PAGE
page{
	10 = FLUIDTEMPLATE
	10{
		templateRootPaths{
			10 = EXT:site_template/Resources/Private/Templates/
		}
		layoutRootPaths{
			10 = EXT:site_template/Resources/Private/Layouts/
		}
		partialRootPaths{
			10 = EXT:site_template/Resources/Private/Partials/
		}
		templateName = Main
	}

	includeCSS{
		10 = EXT:site_template/Resources/Public/css/bootstrap.min.css
		20 = EXT:site_template/Resources/Public/css/bootstrap-theme.min.css
	}

	includeJS{
		10 = EXT:site_template/Resources/Public/js/angular.min.js
	}
}

lib.top_menu = HMENU
lib.top_menu{
	entryLevel = 0

	1 = TMENU
	1{
		NO = 1
		NO{
			linkWrap = <li>|</li>
		}
		ACT < .NO
		ACT.linkWrap = <li class='active'>|</li>
	}
}
