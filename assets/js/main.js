window.onload = function () {
  // TODO:: Do your initialization job

  // add eventListener for tizenhwkey
  document.addEventListener('tizenhwkey', function (e) {
    if (e.keyName == "back")
      try {
        tizen.application.getCurrentApplication().exit();
      } catch (ignore) {
      }
  });

  // Sample code
  var textbox = document.querySelector('.contents');
  textbox.addEventListener("click", function () {
    box = document.querySelector('#textbox');
    box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
  });

};

$(document).ready(function () {
  var items = [];

  for (var i = 0; i < 20; i++) {
    items.push({
      text: i + 1,
      image: 'assets/images/' + (i % 2 + 1) + '.jpg'
    });
  }

  $('#list1').caphList({
    items: items,
    template: '<div class="item item1" focusable data-focusable-initial-focus="<%=(index===0)?true:false%>"> <div style="width:100%; height:100%;				background-size:100% 100%; background: url(<%= item.image %>)"></div></div>',
    containerClass: 'list',
    onFocusItemView: function (context) {
      console.log('focus', context);
    },
    onReachStart: function (context) {
      console.log('reach start', context);
    },
    onReachEnd: function (context) {
      console.log('reach end', context);
    },
    onScrollStart: function (context) {
      console.log('scroll start!', context);
    },
    onScrollFinish: function (context) {
      console.log('scroll finish!', context);
    }
  });

  $('#list2').caphList({
    items: items,
    template: '<div class="item item1" focusable data-focusable-initial-focus="<%=(index===0)?true:false%>"> <div style="width:100%; height:100%;				background-size:100% 100%; background: url(<%= item.image %>)"></div></div>',
    containerClass: 'list',
    onFocusItemView: function (context) {
      console.log('focus', context);
    },
    onReachStart: function (context) {
      console.log('reach start', context);
    },
    onReachEnd: function (context) {
      console.log('reach end', context);
    },
    onScrollStart: function (context) {
      console.log('scroll start!', context);
    },
    onScrollFinish: function (context) {
      console.log('scroll finish!', context);
    }
  });
});