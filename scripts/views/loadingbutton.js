import Loading from './../models/loading';
export default Backbone.View.extend({

  template: JST.loading,

  events: {
    'click .loading': 'showLoading'
  },

  showLoading: function() {
    var that = this;
    that.model.set({"text": "Loading..."});
    that.render();
    setTimeout(function(){
      that.model.set({"text": "Submit"}),
      that.render();
    }, 4000);
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});
