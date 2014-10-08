function View () {
	this.setMarginTop();
	this.clickHandler();
}

View.prototype.setMarginTop = function () {
	var marginTop = -44;
	var rows = $('#container').children();
	for (var cur = rows.first(), i =0; i < rows.length; cur = cur.next(), i++) {
		if (cur.prev().length != 0) {
			marginTop += parseInt(cur.prev().css('height')) + 2;
 			cur.css('top', marginTop + 'px');
		} else {
			cur.css('top', marginTop + 'px');
		}
	}
}

View.prototype.clickHandler = function () {
	var handler = function () {
		$('.big-row-wrap').children('div').off('click');
		var rows = $('#container').children();
		var first = rows.first();
		for (var cur = rows.first(), i = 0; i < rows.length; cur = cur.next(), i++) {
			if (cur.next().length) {
				var curTmp = cur;
				var nextTmp = cur.next();
				cur.animate({
					top : cur.next().css('top'),
					width : cur.next().css('width'),
					height : cur.next().css('height'),
					left : cur.next().css('left'),
					opacity : cur.next().css('opacity')
				}, 3000);
				for (var child = cur.children().first(), j = 0; j < cur.children().length; child = child.next(), j++) {
					child.animate({
						'width' : cur.next().children().css('width'),
						'height' : cur.next().children().css('height'),
						'font-size' : cur.next().children().css('font-size'),
						'line-height' : cur.next().children().css('line-height')
					}, 3000);
				}
				curTmp.removeClass(curTmp.attr('class'));
				curTmp.addClass(nextTmp.attr('class'));
			} else {
				var curTmp = cur;
				var firstTmp = first;
				console.log(firstTmp);
				cur.animate({
					top : parseInt(cur.css('height')) + parseInt(curTmp.css('top')) + 2 + 'px',
					width : firstTmp.css('width'),
					height : firstTmp.css('height'),
					left : firstTmp.css('left'),
					opacity : '0'
				},3000, function () {
					curTmp.remove();
					curTmp.prependTo('#container');
					curTmp.css('top', '-44px');
					$('.big-row-wrap').children().on('click', handler);
				});
				for (var child = cur.children().first(), j = 0; j < cur.children().length; child = child.next(), j++) {
					child.animate({
						width : firstTmp.children('div').css('width'),
						height : firstTmp.children('div').css('height'),
						'font-size' : firstTmp.children('div').css('font-size'),
						'line-height' : firstTmp.children('div').css('line-height')
					}, 3000);
				}
				curTmp.removeClass(curTmp.attr('class'));
				curTmp.addClass('out-row-wrap');
			}
		}
	}
	$('.big-row-wrap').children('div').on('click', handler);
}

var view = new View();

var circ = new CirclesGenerator();

console.log(circ.generateCircle());
