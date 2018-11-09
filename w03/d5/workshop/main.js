class Classic {
  constructor(art_url){
    // this.frame = frame
    this.art_url = art_url;
  }
  render(){
    //do things to the DOM here
    let imgEl = document.querySelector("img")
    imgEl.src = art_url.images.original.url
  }
}
let art_url =
// class Classical extends Art {
//   constructor(){
//     super();
//   }
//
// }

new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
