if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}F.prototype=obj;return new F}}(function($,window,document,undefined){"use strict";var SinglePageNav={init:function(options,container){this.options=$.extend({},$.fn.singlePageNav.defaults,options);this.container=container;this.$container=$(container);this.$links=this.$container.find("a");if(this.options.filter!==""){this.$links=this.$links.filter(this.options.filter)}this.$window=$(window);this.$htmlbody=$("html, body");this.$links.on("click.singlePageNav",$.proxy(this.handleClick,this));this.didScroll=false;this.checkPosition();this.setTimer()},handleClick:function(e){var self=this,link=e.currentTarget,$elem=$(link.hash);e.preventDefault();if($elem.length){self.clearTimer();if(typeof self.options.beforeStart==="function"){self.options.beforeStart()}self.setActiveLink(link.hash);self.scrollTo($elem,function(){if(self.options.updateHash){document.location.hash=link.hash}self.setTimer();if(typeof self.options.onComplete==="function"){self.options.onComplete()}})}},scrollTo:function($elem,callback){var self=this;var target=self.getCoords($elem).top;var called=false;self.$htmlbody.stop().animate({scrollTop:target},{duration:self.options.speed,complete:function(){if(typeof callback==="function"&&!called){callback()}called=true}})},setTimer:function(){var self=this;self.$window.on("scroll.singlePageNav",function(){self.didScroll=true});self.timer=setInterval(function(){if(self.didScroll){self.didScroll=false;self.checkPosition()}},250)},clearTimer:function(){clearInterval(this.timer);this.$window.off("scroll.singlePageNav");this.didScroll=false},checkPosition:function(){var scrollPos=this.$window.scrollTop();var currentSection=this.getCurrentSection(scrollPos);this.setActiveLink(currentSection)},getCoords:function($elem){return{top:Math.round($elem.offset().top)-this.options.offset}},setActiveLink:function(href){var $activeLink=this.$container.find("a[href='"+href+"']");var $parent=$activeLink.parent();this.$container.find("."+this.options.currentClass).removeClass(this.options.currentClass);$parent.addClass(this.options.currentClass)},getCurrentSection:function(scrollPos){var i,hash,coords,section;for(i=0;i<this.$links.length;i++){hash=this.$links[i].hash;if($(hash).length){coords=this.getCoords($(hash));if(scrollPos>=coords.top-this.options.threshold){section=hash}}}return section||this.$links[0].hash}};$.fn.singlePageNav=function(options){return this.each(function(){var singlePageNav=Object.create(SinglePageNav);singlePageNav.init(options,this)})};$.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"current",updateHash:false,filter:"",onComplete:false,beforeStart:false}})(jQuery,window,document);$(document).ready(function(){$(window).scroll(function(){var scrollTop=$(window).scrollTop();$(".section").each(function(){var elementTop=$(this).offset().top-$("#header").outerHeight();if(scrollTop>=elementTop){$(this).addClass("loaded")}})});$("#navigation").singlePageNav({offset:$("#navbar").outerHeight(),filter:":not(.external)",speed:750,currentClass:"active",beforeStart:function(){},onComplete:function(){}});$("#navbar").affix({offset:{top:$("#topbar").outerHeight()}});$(".smooth-scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$("[name="+this.hash.slice(1)+"]");if(target.length){$("html,body").animate({scrollTop:target.offset().top},1e3);return false}}});$(".nav a").on("click",function(){if($(".navbar-toggle").css("display")!="none"){$(".navbar-toggle").click()}})});
