new Vue({
  el: "#app",
  data: {
    nuber: "25",
    thum: "https://image.thum.io/get/image/fit/300x300/",
    tilharurl: "https://compartilharurl.pages.dev/#/",
    posts: []
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("https://dav-api.github.io/JSON.RSS/api.json").then((posts) => {
        this.posts = posts.data;
        console.log(this.posts);
      });
    }
  }
});



var clickedOnShare = false;
function share(button) {
  if (navigator.share) {
    var url = "https://codepen.io/davidsonbpe/";
    var title = "DECOM JSON.RSS";
    var image =
      "https://davidsonbpe.github.io/d-framework/icon/slide-image.jpg";
    var description = "ESTE APLICATIVO BY DAVIDSONBPE";

    navigator.share({
      title: title,
      text: description,
      image: image,
      url: url
    });
  } else {
    if (!clickedOnShare) {
      clickedOnShare = true;
      showLoading(button);
    }
  }
}