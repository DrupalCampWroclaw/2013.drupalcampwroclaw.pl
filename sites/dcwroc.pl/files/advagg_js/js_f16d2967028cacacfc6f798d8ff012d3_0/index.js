/* Source and licensing information for the line(s) below can be found at http://dcwroc.pl/sites/all/modules/captcha/captcha.js. */
Drupal.behaviors.captcha=function(context){$("#edit-captcha-response").attr("autocomplete","off")};Drupal.behaviors.captchaAdmin=function(context){$("#edit-captcha-add-captcha-description").click(function(){if($("#edit-captcha-add-captcha-description").is(":checked")){$("#edit-captcha-description-wrapper").show("slow")}else $("#edit-captcha-description-wrapper").hide("slow")});if(!$("#edit-captcha-add-captcha-description").is(":checked"))$("#edit-captcha-description-wrapper").hide()};
/* Source and licensing information for the above line(s) can be found at http://dcwroc.pl/sites/all/modules/captcha/captcha.js. */
