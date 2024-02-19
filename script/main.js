
// 외부 제이쿼리 서식

$(document).ready(function(){
  // 내비게이션 gnb -------------------------------------------------------------
  let toggle = $('#toggle');
  let gnb = $('header .gnb > ul > li > a');
  let sub = $('header .gnb .sub');

  // 토글버튼 클릭시 gnb 노출
  toggle.click(function(){
    $('header .gnb').fadeToggle();
  });

  $(window).resize(function(){
    w_width = $(window).innerWidth();

    if(w_width<=767){
      // gnb메뉴 클릭시 해당 서브메뉴 보이게 하기
      gnb.click(function(){
        //$('.sub').hide(); //보이는 서브 숨기고
        // 선택한 서브만 보이게한다.
        $(this).css('color','green').parent().siblings().find('a').css('color','#333');
        $(this).next().show().parent().siblings().find('.sub').hide();
        $(this).find('i.fas').toggleClass('rotate1');
      });
      $('#toggle').click(function(){
        $('.gnb').Toggle();
      });
    }

  }).resize();

  // 1. 메인 슬라이드 -----------------------------------------------------------
  const l_btn = $('.m_slide i.fa-angle-left'); //왼쪽 버튼
  const r_btn = $('.m_slide i.fa-angle-right'); //오른쪽 버튼
  let m_slide_img = $('.m_slide > div'); //슬라이드 이미지
  let i = 0;

  // 움직이는 함수 = 서서히 사라지고 나타나는 효과
  function bannerEffect(){
    // console.log('시간함수 호출');
    m_slide_img.fadeOut(); //보이는 이미지 숨기고
    if(i==3){ //만약에 마지막 이미지라면
      i=0; //처음이미지가 보이게 하고
    }else{ //그렇지 않다면
      i++; //다음 이미지가 보이도록 한다.
    }
    m_slide_img.eq(i).stop().fadeIn(); //해당 이미지가 보이게 한다. (stop은 한번만 넘어가게 막아주는 것)
  }
  function bannerEffect2(){
    m_slide_img.fadeOut();
    if(i==0){
      i=3;
    }else{
      i--;
    }
    m_slide_img.eq(i).stop().fadeIn();
  }
  
  // 매 5초마다 함수를 반복호출하여 슬라이드가 변하게 한다.
  let Timer = setInterval(bannerEffect, 5000);

  // 좌,우 버튼 클릭시 해당하는 방향으로 슬라이드 이미지가 나오게 하기
  l_btn.click(function(){
    bannerEffect2();
    // clearInterval(Timer);
  });
  r_btn.click(function(){
    bannerEffect();
    // clearInterval(Timer);
  });

  // 2. 프로모션 탭 콘텐츠 --------------------------------------------------------
  let tab_mnu = $('.promo_tab_wrap > li > a');
  $('.promo_tab_wrap li:first-child div').show();
  tab_mnu.click(function(){
    $(this).next().show().parent().siblings().find('div').hide();

    $(this).addClass('tab_act').parent().siblings().find('a').removeClass('tab_act');

    return false;
  });

  // 3. 웰니스 슬라이드 -----------------------------------------------------------
  const well_slide = $('.well_wrap');
  const w_lbtn = $('.wellness i.fa-angle-left');
  const w_rbtn = $('.wellness i.fa-angle-right');

  // 첫번째 슬라이드의 앞에 마지막 이미지를 배치
  $('.well_wrap > div:last-child').insertBefore('.well_wrap > div:first-child');

  // 왼쪽으로 -100% 이동하여 첫번째 이미지가 가운데 배치되도록 한다.
  well_slide.css('margin-left','-100%');

  // moveLeft 함수
  function moveLeft(){
    well_slide.stop().animate({'margin-left':'-200%'},500, function(){
      $('.well_wrap > div:first-child').insertAfter('.well_wrap > div:last-child');
      well_slide.css('margin-left','-100%');
    });
  }

  // 시간객체를 사용하여 4초마다 움직이도록 한다.
  let Timer2 = setInterval(moveLeft, 4000);

  // moveLeft 함수
  function moveRight(){
    well_slide.stop().animate({'margin-left':'0px'},500, function(){
      $('.well_wrap > div:last-child').insertBefore('.well_wrap > div:first-child');
      well_slide.css('margin-left','-100%');
    });
  } 

  // 좌측버튼 클릭시 
  w_lbtn.click(function(){
    clearInterval(Timer2);
    moveRight();
  });
  w_rbtn.click(function(){
    clearInterval(Timer2);
    moveLeft();
  });

  w_lbtn.mouseleave(function(){
    Timer2 = setInterval(moveLeft, 4000);
  });
  w_rbtn.mouseleave(function(){
    Timer2 = setInterval(moveLeft, 4000);
  });

  // 4. 다이닝 콘텐츠 -----------------------------------------------------------
  const d_list = $('.dining_wrap > ul > li a');

  $(window).resize(function(){
    w_width = $(window).innerWidth();

    if(w_width>=1025){
      d_list.mouseenter(function(){
        $(this).find('p').fadeIn();
        $(this).find('img').css('transform','scale(1.1)');
        // $(this).css('background','rgba(255,255,255,.5)');
      });
      d_list.mouseleave(function(){
        $(this).find('p').fadeOut();
        $(this).find('img').css('transform','scale(1.0)');
      });
    }
  }).resize();


  // 5. 웨딩, 서비스 콘텐츠 ----------------------------------------------------
  let wed_con = $('.wed_service > article > a');
  let more_btn = $('.more_btn');

  $(window).resize(function(){
    w_width = $(window).innerWidth();

    if(w_width>=1025){
      wed_con.mouseenter(function(){
        $(this).parent().height(400);
      });
      wed_con.mouseleave(function(){
        $(this).parent().height(180);
      });
      more_btn.mouseenter(function(){
        $(this).css('background','#fff').css('color','#333');
      });
      more_btn.mouseleave(function(){
        $(this).css('background','none').css('color','#fff');
      });
    }
  }).resize();



  // 6. 갤러리 콘텐츠 --------------------------------------------------------
  const g_list = $('.gallery article');
  let more_btn2 = $('.more_btn2');

  $(window).resize(function(){
    w_width = $(window).innerWidth();

    if(w_width>=1025){
      g_list.mouseenter(function(){
        $(this).find('.g_txt').stop().animate({'bottom':'0px'},300);
      });
      g_list.mouseleave(function(){
        $('.g_txt').stop().animate({'bottom':'-55px'},300);
      });
      more_btn2.mouseenter(function(){
        $(this).css('background','#333').css('color','#fff').css('border','none');
      });
      more_btn2.mouseleave(function(){
        $(this).css('background','none').css('color','#333').css('border','1px solid #333');
      });
    }else{
      more_btn2.css('background','#333').css('color','#fff');
    }

  }).resize();

  g_list.click(function(){
    let img_src = $(this).find('img').attr('src');
    let title = $(this).find('.g_txt p').text();
    let i = $(this).index()-1;

    let modal=`
      <div class="modal">
        <div class="center">
          <h3>${title}</h3>
          <img src=${img_src} alt="">
          <i class="fas fa-times"></i>
          <i class="fas fa-angle-left"></i>
          <span class="page_n">${i}/8</span>
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    `;
    $('body').append(modal);

    const c_btn = $('.fa-times');
    c_btn.click(function(){
      $('.modal').hide();
    });

    $('.modal i.fa-angle-left').click(function(){
      if(i==1){
        i=8;
      }else{
        i--;
      }
      console.log(i); //1,12,11,10,9,8,7,6,5,4,3,2,1....
      dataChange(i);
    });

    $('.modal i.fa-angle-right').click(function(){
      if(i==8){
        i=1;
      }else{
        i++;
      }
      console.log(i); //1,2,3,4,5,6,7,8,9,10,11,12,1....
      dataChange(i);
    });

    function dataChange(i){

      // 1. 페이지 번호
      $('.modal .page_n').text(i+'/8');

      // 2. 인덱스번호에 맞는 제목으로 변경
      $('.modal h3').text($('.gallery article').eq(i).find('.g_txt p').text());

      // 3. 인덱스 번호에 맞는 이미지 출력하기
      $('.modal img').attr('src', './images/gallery0'+i+'.jpg');

      };

      return false;
  });


  // top버튼 스크롤 위치에 따라 보이기/숨기기----------------------------------
  let scrollPos;
  $(window).scroll(function(){
    scrollPos = $(this).scrollTop();
    // console.log(scrollTop);

    if(scrollPos>=600){
      $('.t_btn').addClass('act');
    }else{
      $('.t_btn').removeClass('act');
    }
    return false;
  });

  $('.t_btn').click(function(){
    $('html').animate({'scrollTop':'0px'},500);
    return false;
  });

});
