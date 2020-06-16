import { Component, OnInit } from "@angular/core";
import { Lightbox, IAlbum } from "ngx-lightbox";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();
  public slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  public euroSafeImages: IAlbum[] = [
    {
      src: "../assets/img/yenimahalle-star.png",
      caption: "Sezin Tip Yenimahalle Euro Safe Imaging Star",
      thumb: "../assets/img/yenimahalle-star.png",
    },
    {
      src: "../assets/img/aksaray-star.png",
      caption: "Sezin Tip Aksaray Euro Safe Imaging Star",
      thumb: "../assets/img/aksaray-star.png",
    },
    {
      src: "../assets/img/eregli-star.png",
      caption: "Sezin Tip Eregli Euro Safe Imaging Star",
      thumb: "../assets/img/eregli-star.png",
    },
    {
      src: "../assets/img/gmk-star.png",
      caption: "Sezin Tip Gazi Mustafa Kemal Euro Safe Imaging Star",
      thumb: "../assets/img/gmk-star.png",
    },
  ];
  constructor(private lightbox: Lightbox) {}

  ngOnInit() {}

  openLightbox(index: number) {
    this.lightbox.open(this.euroSafeImages, index, {
      positionFromTop: 100,
    });
  }
}
