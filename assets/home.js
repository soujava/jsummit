/*
 *  jQuery Hashchange - v1.0.0
 *  A plugin which allows to bind callbacks to custom window.location.hash (uri fragment id) values.
 *  https://github.com/apopelo/jquery-hashchange
 *
 *  Made by Andrey Popelo
 *  Under MIT License
 */
!function(a){var b={init:function(b){var c=a.extend({hash:"",onSet:function(){},onRemove:function(){}},b);return c.hash?(a.hashchange||(a.hashchange={},a.hashchange.onSet={},a.hashchange.onRemove={},a.hashchange.prevHash="",a.hashchange.listener=function(){if(window.location.hash!==a.hashchange.prevHash){var b=a.hashchange.onRemove[a.hashchange.prevHash],c=a.hashchange.onSet[window.location.hash];b&&b(),c&&c(),a.hashchange.prevHash=window.location.hash}},this.bind("hashchange",a.hashchange.listener)),a.hashchange.onSet[c.hash]=c.onSet,a.hashchange.onRemove[c.hash]=c.onRemove,window.location.hash===c.hash&&window.location.hash!==a.hashchange.prevHash&&a.hashchange.listener(),this):this}};a.fn.hashchange=function(a){if("[object Array]"===Object.prototype.toString.call(a)){for(var c=a.length-1;c>=0;c--)b.init.apply(this,[a[c]]);return this}return b.init.apply(this,arguments)}}(jQuery);

(function() {
  
$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // move to when haschange event
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });
});
;


}).call(this);



$(function() {
    var newHash = "", $mainContent = $(".main-content");

    $(".nav-link").delegate("a", "click", function() {
if($(this).hasClass("external"))return;
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        if (newHash) {
          $mainContent.hide().load(newHash + " .main-content > .page-content", function() {
             $mainContent.fadeIn(200);
           });
           $(".nav .nav-link").each(function() {
             $(this).removeClass("active-nav-item");
           });
           $(".nav .nav-link a[href='"+newHash+"']").addClass("active-nav-item");
        }
    });
    $(window).trigger('hashchange');
});


