function nullclock111() {
    var buttomclock111 = document.getElementById('clock111');
    var time111button = document.getElementById('clock111button');
    if (buttomclock111.style.display == "block") {
        //状態:非表示
        buttomclock111.style.display = "none";
        time111button.style.top = "0px";
        time111button.value = 'アナログ時計を表示';
    } else if (buttomclock111.style.display == "none") {
        //状態:表示
        buttomclock111.style.display = "block";
        time111button.style.top = "0px";
        time111button.value = 'アナログ時計を非表示';
    }
}

// function kino_menue() {
//     var book = document.getElementById('book_kino25789');
//     var button_menue = document.getElementById('menue_button');
//     if (book.style.display == "block") {
//         book.style.display = 'none';
//         button_menue.value = 'メニューを表示';
//         document.getElementById("style").innerHTML = "body{overflow:hidden}";

//     } else if (book.style.display == "none") {
//         book.style.display = 'block';
//         button_menue.value = 'メニューを非表示';
//         document.getElementById("style").innerHTML = "body{overflow-x:hidden;overflow-y:scroll}";
//     }
// }


$("#google_tab_button").click(
    function() {
        $('#google_tab').toggleClass("open_google");
    }
);



$("#menue_home").click(
    function() {
        $(this).toggleClass("open_menue");
        if ($("#book_kino25789").hasClass("open_menue")) {
            $("#book_kino25789").removeClass("open_menue");
            $("#book_kino25789").addClass("close_menue");
        } else {
            $("#book_kino25789").addClass("open_menue");
            $("#book_kino25789").removeClass("close_menue");
        }
    }
);

//time

{


    // 時計のメインとなる関数
    function clock() {
        // 現在日時を表すインスタンスを取得
        var now = new Date();
        // 時
        var h = now.getHours();
        // 分
        var mi = now.getMinutes();
        // 秒
        var s = now.getSeconds();
        // ミリ秒
        var ms = now.getMilliseconds();
        //    day(weeks,now,y,mo,d,w,h,mi,s,ms);

        //日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理

        if (mi < 10) mi = "0" + mi;
        if (s < 10) s = "0" + s;
        if (ms < 95) ms = "0" + ms;
        // if (ms < 8) ms = "00" + ms;

        //　HTML: <span id="clock_time">(ココの時刻文字列を書き換え)</span>
        document.getElementById("clock_time").innerHTML = h + "時" + mi + "分" + s + "秒" + ms;



        // style 要素を作り、その中に keyframes アニメーションを入れる

        // animation.innerHTML = `
        // #second-minutes111{
        //     transform: rotate(${msecondDeg}deg);
        // }
        // #second-hand111 {
        //     transform: rotate(${secondDeg}deg);
        // }
        // #minute-hand111{
        //     transform: rotate(${minuteDeg}deg);
        // }
        // #hour-hand111{
        //     transform: rotate(${hourDeg}deg);
        // }`;

        document.head.appendChild(animation);
    }
    // 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
    setInterval(clock, 9000);
    setInterval(() => {
        // 現在日時を表すインスタンスを取得
        var now = new Date();
        var weeks = new Array("日", "月", "火", "水", "木", "金", "土");
        // 年
        var y = now.getFullYear();
        // 月 0~11で取得されるので実際の月は+1したものとなる
        var mo = now.getMonth() + 1;
        // 日
        var d = now.getDate();
        // 曜日 0~6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する
        var w = weeks[now.getDay()];
        if (mo < 10) mo = "0" + mo;
        if (d < 10) d = "0" + d;
        //　HTML: <span id="clock_date">(ココの日付文字列を書き換え)</span>
        document.getElementById("clock_date").innerHTML = y + "年" + mo + "月" + d + " 日" + w + "曜日";
    }, 1000);
    //時計cssバージョン

    var animation = document.getElementById("style");
    var now = new Date();
    // 時
    var h = now.getHours();
    // 分
    var mi = now.getMinutes();
    // 秒
    var s = now.getSeconds();
    // ミリ秒
    var ms = now.getMilliseconds();
    var msecondDeg = (ms * 360 / 1000) + 90;
    var secondDeg = (s * 360 / 60) + 90;
    var minuteDeg = (mi * 360 / 60) + ((s * 360 / 60) / 60) + 90;
    var hourDeg = (h * 360 / 12) + ((mi * 360 / 60) / 12) + ((s * 360 / 60) / 720) + 90;
    animation.innerHTML = `
        @keyframes rotation-ms {
            0% {transform: rotate(${msecondDeg}deg)}
            100% {transform: rotate(${(360 + msecondDeg)}deg)}
        }
        @keyframes rotation-s {
            0% {transform: rotate(${secondDeg}deg)}
            100% {transform: rotate(${(360 + secondDeg)}deg)}
        }
        @keyframes rotation-m {
            0% {transform: rotate(${minuteDeg}deg)}
            100% {transform: rotate(${(360 + minuteDeg)}deg)}
        }
        @keyframes rotation-h {
            0% {transform: rotate(${hourDeg}deg)}
            100% {transform: rotate(${(360 + hourDeg)}deg)}
        };`

    //var clock111 = document.getElementById("clock111")
    //    clock111.style.height = clock111.scrollWidth + "px";

}