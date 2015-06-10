var Like = Backbone.Model.extend({
  defaults: {
    count: 0,
  },
  like: function() {
    var count = this.get("count");
    var newCount = count + 1;
    this.set({"count": newCount});
    console.log(newCount);
    // this.attributes.set(count, newCount);
    }
    // var newCount = (currentCount + 1);
    // console.log(currentCount);
    // return this.attributes.set(newCount);
});

export default Like;
