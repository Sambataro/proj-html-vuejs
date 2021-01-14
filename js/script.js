var app = new Vue (
{

  el: "#homepage",
  data: {
    navMenu: [
      {
        name:"HOME",
      },
      {
        name:"ABOUT",
      },
      {
        name:"DEPARTMENTS",
        active: false,
      },
      {
        name:"ARTICLES",
      },
    ],

    healtItem: [
      {
        image:"img/icon-1.png",
        title: "SAME DAY APPOINTMENTS",
        paragraph: "Sed ut perspiciatis unde omnis iste  natus error sit voluptam ",
      },
      {
        image:"img/icon-2.png",
        title: "WOLRD CLASS FACILITIES",
        paragraph: "Sed ut perspiciatis unde omnis iste  natus error sit voluptam ",
      },
      {
        image:"img/icon-3.png",
        title: "EXPERT DOCTORS",
        paragraph: "Sed ut perspiciatis unde omnis iste  natus error sit voluptam ",
      },
      {
        image:"img/icon-4.png",
        title: "COMPLEMENTARY THERAPIES",
        paragraph: "Sed ut perspiciatis unde omnis iste  natus error sit voluptam ",
      },
    ],
    doctors: [
      {
        image: "img/doctor-1.jpg",
        name: "JON SNOW",
        genre: "Anesthesiologist",
        paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
      },
      {
        image: "img/doctor-2.jpg",
        name: "TONY STARK",
        genre: "Cardiologist",
        paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
      },
      {
        image: "img/doctor-3.jpg",
        name: "ANNA SMITH",
        genre: "Nurse Practitioner",
        paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
      },
    ],
    services: [
      {
        image:"img/icon-14.png",
        name:"REHABILITATION CENTER",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },
      {
        image:"img/icon-15.png",
        name:"DENTAL IMPLANTS",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },
      {
        image:"img/icon-13.png",
        name:"MEDICAL RESEARCH",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },
      {
        image:"img/icon-16.png",
        name:"BLOOD BANK",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },
      {
        image:"img/icon-11.png",
        name:"PHARMACEUTICAL ADVICE",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },
      {
        image:"img/icon-12.png",
        name:"MEDICAL COUNSELING",
        paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
      },

    ],
    departments: [
      "Cardiology",
      "Pediatrics",
      "Diabetes Care",
      "Pre-natel Care",
      "Ultrasound Echocardiogram"
    ],
    info: [
      {
        name: "Emergency Care",
        icon: "img/wave-divider.png",
        paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",

      },
      {
        name: "Expert Diagnostics",
        icon: "img/wave-divider.png",
        paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",

      },
      {
        name: "Superb Rehabilitation",
        icon: "img/wave-divider.png",
        paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
      }
    ],
    client: [
      {
        logo: "img/client-logos-1-200x188.png"
      },
      {
        logo: "img/client-logos-2-200x188.png"
      },
      {
        logo: "img/client-logos-3-200x188.png"
      },
      {
        logo: "img/client-logos-4-200x188.png"
      },
    ],
    contacts: [
      {
        icon: "fas fa-map-marker-alt" ,
        info: "121 King Street, London United Kingdom"

      },
      {
        icon: "fas fa-phone" ,
        info: "1.800.458.556"

      },
    ],
    copy: [
      "© Copyright 2012 - 2021",
      "Avada Theme by Theme Fusion",
      "All Rights Reserved",
      "Powered by WordPress",
    ],
  }
}
);
