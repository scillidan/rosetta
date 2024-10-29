jQuery("#lg-video")
  .justifiedGallery({
    rowHeight: 180,
    margins: 1.5
    lastRow: "hide",
    captions: true,
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lg-video"),
      {
        galleryId: "video",
        plugins: [lgThumbnail, lgVideo],
        autoplayFirstVideo: false,
        addClass: 'lg-custom-thumbnails',
        download: false,
        allowMediaOverlap: false,
        // animateThumb: false,
        // closeOnTap: false,
        // enableDrag: false,
        // enableSwipe: false,
        pager: false,
        mousewheel: true,
        swipeToClose: false,
        videojs: true,
      }
    );
  });