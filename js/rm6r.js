(function(){
  function playMusic(list){
    document.getElementById("musicEmbed").src = 'http://www.xiami.com/widget/49935010_' +
    list + '_738_100_FF9900_FFFFF1_1/multiPlayer.swf'
  }

  function randPlayList(max){
    var list = [1775863928,1769509693,3035981,1769340552,3435904,
      1769304758,1769462115,1771526122,1770554727].sort(function(){ return 0.5 - Math.random() })
      return list.slice(0,max).join(',')
  }
  playMusic(randPlayList(10))
})()
document.onreadystatechange = function(){
  if (document.getElementById("ft")){ document.getElementById("ft").style.display="none"; }
  if (document.getElementById("magicreceivegift") == null){ return }
  var hd_text=""
  if ( Math.random() > 0.6 ) {
    hd_text += '<a style="color:black !important" ' +
    'onclick="showWindow(\'magicgift\', this.href, \'get\', 0)" ' +
    'href="home.php?mod=spacecp&ac=magic&op=receivegift&uid=336539" ' +
    'title="领取VIPArcher挥泪派发的红包！">' +
    '<img src="static/image/magic/gift.gif" alt="空间红包"></a>'
  }
  document.getElementById("magicreceivegift").innerHTML = hd_text
}