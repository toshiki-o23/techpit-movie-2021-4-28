$(function () {
  $('#comment_button').on('click', function () {

    // テキストボックスに入力された文字を取得し、commentに格納
    var comment = $("#comment_text").val();

    // 動画の座標を取得し、commentPosに格納
    var commentPos = $('#nicoscreen').offset();

    // 動画上に流れるコメントの情報をnico_commentに格納
    var nico_comment = $('<div id="item" style="font-size: 36px; color: white; font-weight: bold; text-shadow: black 1px 1px 1px; width: 100px; white-space: nowrap; position: absolute;">' + comment + '</li>').appendTo('#nicoscreen');

    // ↑で設定したコメントの座標をセットし、offsetに格納。高さはsetPositionで決定
    var offset = nico_comment.offset({ top: setPosition('#item'), left: commentPos.left + $('#nicoscreen').width() });

    // ↑で取得したコメントの座標を、動画の範囲内で左から右へ動かす。
    var animation = offset.animate({ left: commentPos.left }, {
      duration: 3000,
      easing: 'linear',
      queue: false,
      complete: function () {

        // 右端まで動かしたらコメントを非表示にする。
        animation.hide();
      }
    });

    //リスト表示
    // home.html.erbのulタグ（id="list"が指定されているので#list）にcommentを記述する
    $('<li id="list_item" class="list-group-item list-group-item-light" color:black">' + comment + '</li>').prependTo('#list');
    
    // テキストボックスの値を削除
    $("#comment_text").val("");

    // コメントの場所を指定
    function setPosition(id) {
      var top = $('#nicoscreen').offset();
      var itemHeight = $(id).height();
      var bottom = top.top + $('#nicoscreen').height() - itemHeight;
      var length = bottom - top.top;
      return bottom - length * Math.random();
    }
  });
});
