    // JavaScript to create multiple hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        document.querySelector('.heart-container').appendChild(heart);

        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds

        heart.style.left = `${startX}px`;
        heart.style.animationDuration = `${duration}s`;

        // Remove the heart element when the animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    function insertText() {
        var mainTextElement = document.getElementById("main_text");
        mainTextElement.style = "display : block";
        // �Ӿٴ���س��ͧ����ʴ�
        var speechTexts = [
          "Ja rak mai rakkk",
          "rak gun naaa",
          ".... rak diao neee",
          "rak gun rak gun"
        ];
    
        // ��Ҷ֧ element ���� id "main_text"
        var mainTextElement = document.getElementById("main_text");
    
        var randomIndex = Math.floor(Math.random() * speechTexts.length);
        var randomSpeech = speechTexts[randomIndex];
    
        // �ʴ��Ӿٴ���������
        mainTextElement.innerHTML = randomSpeech;
      }

    function btn_no() {
        insertText();
        var yesButton = document.getElementById('yes');
        var noButton = document.getElementById('no');
        var sayYes = document.getElementById('say_yes');
        var sayNoElements = document.querySelectorAll('.say_no');

        // Increase font size of 'yes' button
        var currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize + 2) + 'px';

        // Reset font size of 'no' button
        noButton.style.fontSize = '16px';

        // Show 'no' content and hide 'yes' content
        sayYes.style.display = 'none';

        // Hide all elements with class 'say_no'
        sayNoElements.forEach(function (element) {
            element.style.display = 'none';
        });

        // Randomly select and display one element with class 'say_no'
        var randomIndex = Math.floor(Math.random() * sayNoElements.length);
        sayNoElements[randomIndex].style.display = 'block';
    }

    function btn_yes() {
        var mainTextElement = document.getElementById("main_text");
        mainTextElement.innerHTML = 'rak baby mak mak naaa pu pu';
        var yesButton = document.getElementById('yes');
        var noButton = document.getElementById('no');
        var sayYes = document.getElementById('say_yes');
        var sayNoElements = document.querySelectorAll('.say_no');

        // Reset font size of 'yes' button
        yesButton.style.fontSize = '16px';

        // Show 'yes' content and hide 'no' content
        sayYes.style.display = 'block';

        // Hide all elements with class 'say_no'
        sayNoElements.forEach(function (element) {
            element.style.display = 'none';
        });
    }

// <![CDATA[
    var colours=new Array('#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'); // colours of the hearts
    var minisize=20; // smallest size of hearts in pixels
    var maxisize=50; // biggest size of hearts in pixels
    var hearts=100; // maximum number of hearts on screen
    var over_or_under="over"; // set to "over" for hearts to always be on top, or "under" to allow them to float behind other objects
    
    /*****************************
    *JavaScript Love Heart Cursor*
    *  (c)2013+ mf2fm web-design *
    *   http://www.mf2fm.com/rv  *
    *  DON'T EDIT BELOW THIS BOX *
    *****************************/
    var x=ox=400;
    var y=oy=300;
    var swide=800;
    var shigh=600;
    var sleft=sdown=0;
    var herz=new Array();
    var herzx=new Array();
    var herzy=new Array();
    var herzs=new Array();
    var kiss=false;
    
    if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
      var oldonload=window.onload;
      if (typeof(oldonload)!='function') window.onload=funky;
      else window.onload=function() {
        if (oldonload) oldonload();
        funky();
      }
    }
    
    addRVLoadEvent(mwah);
    
    function mwah() { if (document.getElementById) {
      var i, heart;
      for (i=0; i<hearts; i++) {
        heart=createDiv("auto", "auto");
        heart.style.visibility="hidden";
        heart.style.zIndex=(over_or_under=="over")?"1001":"0";
        heart.style.color=colours[i%colours.length];
        heart.style.pointerEvents="none";
        if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
        else heart.style.opacity=0.45;
        heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
        document.body.appendChild(heart);
        herz[i]=heart;
        herzy[i]=false;
      }
      set_scroll();
      set_width();
      herzle();
    }}
    
    function herzle() {
      var c;
      if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
        ox=x;
        oy=y;
        for (c=0; c<hearts; c++) if (herzy[c]===false) {
          herz[c].firstChild.nodeValue=String.fromCharCode(9829);
          herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
          herz[c].style.top=(herzy[c]=y-minisize)+"px";
          herz[c].style.fontSize=minisize+"px";
          herz[c].style.fontWeight='normal';
          herz[c].style.visibility='visible';
          herzs[c]=minisize;
          break;
        }
      }
      for (c=0; c<hearts; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
      setTimeout("herzle()", 30);
    }
    
    document.onmousedown=pucker;
    document.onmouseup=function(){clearTimeout(kiss);};
    
    function pucker() {
      ox=-1;
      oy=-1;
      kiss=setTimeout('pucker()', 100);
    }
    
    function blow_me_a_kiss(i) {
      herzy[i]-=herzs[i]/minisize+i%2;
      herzx[i]+=(i%5-2)/5;
      if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
        herz[i].style.visibility="hidden";
        herzy[i]=false;
      }
      else if (herzs[i]>minisize+1 && Math.random()<2.5/hearts) break_my_heart(i);
      else {
        if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
        herz[i].style.top=herzy[i]+"px";
        herz[i].style.left=herzx[i]+"px";
      }
    }
    
    function break_my_heart(i) {
      var t;
      herz[i].firstChild.nodeValue=String.fromCharCode(9676);
      herz[i].style.fontWeight='bold';
        herzy[i]=false;
      for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
      setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
    }
    
    document.onmousemove=mouse;
    function mouse(e) {
      if (e) {
        y=e.pageY;
        x=e.pageX;
      }
      else {
        set_scroll();
        y=event.y+sdown;
        x=event.x+sleft;
      }
    }
    
    window.onresize=set_width;
    function set_width() {
      var sw_min=999999;
      var sh_min=999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
        if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
      }
      if (typeof(self.innerWidth)=='number' && self.innerWidth) {
        if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
        if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
        if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
      }
      if (sw_min==999999 || sh_min==999999) {
        sw_min=800;
        sh_min=600;
      }
      swide=sw_min;
      shigh=sh_min;
    }
    
    window.onscroll=set_scroll;
    function set_scroll() {
      if (typeof(self.pageYOffset)=='number') {
        sdown=self.pageYOffset;
        sleft=self.pageXOffset;
      }
      else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown=document.body.scrollTop;
        sleft=document.body.scrollLeft;
      }
      else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft=document.documentElement.scrollLeft;
        sdown=document.documentElement.scrollTop;
      }
      else {
        sdown=0;
        sleft=0;
      }
    }
    
    function createDiv(height, width) {
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.height=height;
      div.style.width=width;
      div.style.overflow="hidden";
      div.style.backgroundColor="transparent";
      return (div);
    }
    // ]]>



