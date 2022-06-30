

$(".quest_title").click(function() {
	$(this).parent().toggleClass("active");
	$(this).next('.quest_txt').slideToggle();
});

$(".filter_button").click(function() {
	$(this).toggleClass("active");
	$(this).next('.filter').slideToggle();
});

$("#toggle").click(function() {
	$(this).toggleClass("on");
	$(this).parents('header').toggleClass("active");
	$(".menu ul").slideToggle();
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
$(this)
  .addClass('active').siblings().removeClass('active')
  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});