$(document).ready(function(){
  var tabAnchor = $('.tabs-nav li a'),
      tabPanel = $('.tabs-panel');

  tabAnchor.click (function(e){
    e.preventDefault();

    // 탭 메뉴 active 제거
    tabAnchor.removeClass('active');
    // 클릭한 메뉴만 active
    $(this).addClass('active');

    // 탭 패널 전체 숨김
    // tabPanel.hide();
    tabPanel.removeClass('active');
    // 클릭한 탭 패널만 보이게
    var $taget = $(this).attr('href');
    // $($taget).show();
    $($taget).addClass('active');
  });
});