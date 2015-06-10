import LikeView from './views/likebutton';
import LoadingView from './views/loadingbutton';
import Like from './models/like';
import Loading from './models/like';

(function(){
  'use strict';

  $(document).ready(function(){
    $('#app-container').html(JST.application());
    renderLike();
    renderLoading();



    function renderLike() {
      var like = new Like();
      var likeView = new LikeView({model: like});
      $('.likebox').html(likeView.el);
    }

    function renderLoading() {
      var loading = new Loading();
      var loadingButton = new LoadingView({model: loading});
      $('.loadingbox').html(loadingButton.el);
    }










  });
})();
