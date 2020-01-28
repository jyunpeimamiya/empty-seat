$( function() {
  $('#tweive' ).click( function () {
    document.cookie = 'hoge=1';
  )}
  
   

  window.onload = function Color() {
    $('#tweive').css("color","red");
  }
    )};
    
     



//     $('#tweive').css("color","red");
//   } );
//   jQuery( '#eleven' ).click( function () {
//     $('#eleven').css("color","red");
//   } );
//   jQuery( '#ten' ).click( function () {
//     $('#ten').css("color","red");
//   });
// });

// $( function () {
//   $('#tweive').click(function(){
//     document.cookie = 'hoge=1';
//     $('#tweive').css("color","red");
    
// });



//   function color($color){
//     if( $color == undefined ){
//       var $color = $.cookie( 'color' );
//       if( $color == undefined ){
//         var $color = '#F7FE2E';
//       }
//     }
//     $.cookie( 'color', $color, { expires: 7 } );
//     $( '.btn' ).css( { 'color': $color } );
//   }
// });









// function setCookie(key,value){ 
//   temp=key+"="+escape(value)+";";  
//   document.cookie=temp; 
// }
// function getCookie(key){ 
//   temp=document.cookie+";"; 
//   i=temp.indexOf(key,0);
//   if(i!=-1){
//     i+=(key.length+1); 
//     j=temp.indexOf(";",i); 
//     value=temp.substring(i,j);
//     return(unescape(value)); 
//   }
//   return(""); 
// }
// function InitCookie(){	
//   fgc = getCookie("fgcolor");
//   if(fgc != "")document.fgColor = fgc;
// }
// function FGColorSet(fgc){
//   setCookie("fgcolor",fgc); 
//   document.fgColor = fgc;

// }



// function readFunc() {
//   if(FGcolor.value == 12)
//   $('#$color').css("color","red")

// }











// function pushBtn() {
  
//   document.cookie = 'cookie=1';
// }

// window.onload = function () {
//   $.cookie(css("color","red"))
// }
// if ($.cookie("cookie2") == "onload"){
//   $("#input").prop('checked', true);
// }
// function checkcookie(){
//   if ($("#input").prop('checked') == true) {
//     $.cookie("cookie2", "onload");
    
//   }else{
//     $.removeCookie("cookie2");
//         }
//     };
// $('#input').click(function(){
//     checkcookie();
// });
    
  






// function pushBtn() {
//   document.cookie = 'hoge=1';
//   $.cookie(pushBtn);

// }
// window.onload = function () {
//   $('#$color').css("color","red")
// }
  // if ($('#$color').css("color","red"));
  //   document.cookie = 'hoge=1';
    

    

// function execEnd() {
//   document.cookie = 'hoge=0';
//   $('#eleven').css("color","red");
// }




// ボタンON状態チェック
// function isActive() {
//   // データを1つずつに分ける
//   var r = document.cookie.split(';');
//   r.forEach(function(value) {
//       // cookie名と値に分ける
//       var content = value.split('=');
//       if ( content[0] == "hoge" ) {
//           if ( content[1] == "1" ) {
//               return true;
//           }
//       }
//   })
//   return false;
// }

// 終了ボタン押下処理


// if ('hoge===1')
// $('#$color').css("color","red");

// $(function() {

//    $('.btn').click(function(){
// $('#$color').css("color","red");
//   });
// $('.btn').click(function(){
//   $('#$color').css("color","red");
// //     // document.cookie = "name=1";
// //     Cookies.set('name','1');
// //     const myne = Cookies.get('name');
// //     console.log(name);
// // });
// });
// });


// $.cookie("cookie1","red",{path: "/"});
// $('#$color').click(function(){
//   $.cookie("cookie1", "1");
// });

// $(function() {
//   $('.btn').click(function(){
//   var selectNo = $(this).val();
//   $('input').on('click')
//   const answer = window.prompt($('#$color').val()+"番でいいですか？",('yes or no'));
//   if(answer === 'yes'){
//   window.alert('登録しました');
//   $('#$color').css("color","red");
//   }else if(answer === 'no'){
//   window.alert('もう一度選択してください');
//   }else{
//   window.alert('yesかnoで記入してください');
//   }
//   });
//   });


