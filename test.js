(function() {
  'use strict';
  kintone.events.on('app.record.index.show', function(event) {
    alert('hello4');
    $(".gaia-argoui-app-filterbutton").hide();
  });
})();
