$(document).ready(function() {
			//轮播图
			$(".focusBox").hover(function() {
				$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.2)
			}, function() {
				$(this).find(".prev,.next").fadeOut()
			});
			$(".focusBox").slide({
				mainCell: ".pic",
				autoPlay: true,
				delayTime: 600,
				trigger: "click"
			});
			//swiper
			var mySwiper1 = new Swiper('.pageone .swiper-container', {
				// 如果需要前进后退按钮
				slidesPerView: 'auto',
				slidesPerView: 4,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			})
			new tabs("#page2-tab", 0, "click");
			//swiper
			var mySwiper2 = new Swiper('.page3-tab .swiper-container', {
				// 如果需要前进后退按钮
				slidesPerView: 'auto',
				//				slidesPerView: 3,
				spaceBetween: 10,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			});
			$(function() {
				$('.num').hover(
					function() {
						var overlay = $(this).find('.over');
						overlay.removeClass(overlay.data('return')).addClass(overlay.data('hover'));
					},
					function() {
						var overlay = $(this).find('.over');
						overlay.removeClass(overlay.data('hover')).addClass(overlay.data('return'));

					}
				);
			});
			//page4 swiper
			var swiper = new Swiper('.page4box .swiper-container', {
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				spaceBetween: 30,
				effect: 'fade',
				loop: 'true'
			});
			//长时间背景色
			$(".page3-tab .swiper-slide").hover(function() {
				$(this).stop(true).delay(600).animate({
					backgroundColor: 'rgba(255, 255, 255, 0.8)'
				})
			}, function() {
				$(this).stop(true).animate({
					backgroundColor: 'rgba(0, 0, 0, 0)'

				})
			})
			//鼠标滚动
			$(window).scroll(function() {
				var sc = $(window).scrollTop();
				if(sc > 0) {
					$(".re_top").css("display", "block");
				} else {
					$(".re_top").css("display", "none");
				}
			})
			$(".re_top").click(function() {
				var sc = $(window).scrollTop();
				$('body,html').animate({
					scrollTop: 0
				}, 500);
			});
			//fullpage效果
			$(".fupa").fullpage({
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
				navigation: true,
				paddingTop: '60px',
				paddingBottom: '30px',
				navigationTooltips: ['广告', '案例', '服务', '关于', '新闻', '联系'],
				afterLoad: function(anchorLink, index) {
					if(index == 2) {
						console.log($())
						$('.pageone').find('.swiper-slide').stop(true).animate({

							top: '0'

						}, 1500, 'easeOutExpo');
						$('.pageone').find('.swiper-slide').eq(0).stop(true).animate({

							top: '0'

						}, 800, 'easeOutExpo');
						$('.pageone').find('.swiper-slide').eq(1).stop(true).animate({

							top: '0'

						}, 1300, 'easeOutExpo');
						$('.pageone').find('.swiper-slide').eq(2).stop(true).animate({

							top: '0'

						}, 1600, 'easeOutExpo');
						$('.pageone').find('.swiper-slide').eq(3).stop(true).animate({

							top: '0'

						}, 2000, 'easeOutExpo');

					}
					if(index == 3) {
						$('.page3-tab').find('.swiper-slide').eq(3).animate({
							left: '0px',
							opacity: '1'
						}, 200, 'swing');
						$('.page3-tab').find('.swiper-slide').eq(2).animate({
							left: '0px',
							opacity: '1'
						}, 500, 'swing');
						$('.page3-tab').find('.swiper-slide').eq(1).animate({
							left: '0px',
							opacity: '1'
						}, 800, 'swing');
						$('.page3-tab').find('.swiper-slide').eq(0).animate({
							left: '0px',
							opacity: '1'
						}, 1000, 'swing');
					}
					if(index==4){
						$('.page4box').find('.anenst-content').animate({
							opacity:'1'
						},100,'easeOutExpo',function () {
							$('.page4box').find('.anenst-content').stop(true).animate({
								top:'15%'
							},500,'swing')
						})
					}
					if(index==5){
						$('.page5back .left').stop(true).animate({
							left:'0'
						},200,'swing');
						$('.page5back .right').find('.downd').eq(0).stop(true).animate({
							top:'0'
						},400,'swing');
						$('.page5back .right').find('.downd').eq(1).stop(true).animate({
							top:'0'
						},800,'swing');
						$('.page5back .right').find('.downd').eq(2).stop(true).animate({
							top:'0'
						},1200,'swing')
					}
				},
				onLeave: function(index, direction) {
					if(index == 1) {
						$('.pageone').find('.swiper-slide').animate({
							top: '330px'
						}, 600, 'easeOutExpo');
					}
					if(index == 2) {
						$('.pageone').find('.swiper-slide').animate({
							top: '330px'
						}, 600, 'easeOutExpo');
					}
					if(index == 3) {
						$('.page3-tab').find('.swiper-slide').animate({
							left: '-200px',
							opacity:'0'
						}, 600, 'easeOutExpo');
					}
					if(index==4){
						$('.page4box').find('.anenst-content').animate({
							top:'22%'
						},600,'easeOutExpo',function () {
							$('.page4box').find('.anenst-content').stop(true).animate({
								opacity: '0'
							},500,'swing')
						})
					}
					if(index==5){
						$('.page5back .left').stop(true).animate({
							left:'-160px'
						},400,'swing');
						$('.page5back .right').find('.downd').stop(true).animate({
							top:'-80px'
						},400,'swing');
					}
				}

			});

		});