var app = new Vue (
{

  el: "#app",
  data: {
    departments: [
      "Cardiology",
      "Pediatrics",
      "Diabetes Care",
      "Pre-natel Care",
      "Ultrasound Echocardiogram"
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
    ]

  }

}
);
