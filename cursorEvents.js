AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
    handleClickEvents: function () {
      this.el.addEventListener("click", evt => {
        const comicsContainer = document.querySelector("#comics-container")
        const {state} = comicsContainer.getAttribute("comics")
        if (state === "comics-list"){
          const id = this.el.getAttribute("id")
          const comicsId = ["spider-man, batman, superman, the-flash"]
          if (comicsId.includes(id)){
            comicsContainer.setAttribute("comics",{
              state: "view", 
              selectedCard: id
            })
          }
        }
      })
    },


    handleComicsListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["spider-man", "batman", "superman", "the-flash"];
      if (comicsId.includes(id)) {
        const comicContainer = document.querySelector("#comics-container");
        comicsContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data
        if (selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if (id == selectedItemId){
            el.setAttribute("material", {
              color:"#0077CC", opacity: 1
            })
          }
        }
      })
    },
  });
  