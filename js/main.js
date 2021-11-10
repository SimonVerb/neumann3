$(function () {
   $('.header__btn').on('click', function(){
    $('.cooperation__menu').toggleClass('active');
   });

   $('.form__btn').on('click', function(){
    $('.cooperation__menu').removeClass('active');
   });

   $(document).ready(function () {
      $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });
      });
})