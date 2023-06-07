AFRAME.registerComponent("comics", {
    schema: {
    state: { type: "string", default: "comics-list" },
    selectedCard: { type: "string", default: "#card1" },
    },
    init: function () {
      this.comicsContainer = this.el;
      this.createCards()
    },

    tick: function () {
      const { state } = this.el.getAttribute("tour");
  
      if (state === "view") {
        this.hideEl([this.comicsContainer]);
        this.showView();
      }
    },
    hideEl: function (elList) {
      elList.map(el => {
        el.setAttribute("visible", false);
      });
    },
  
    showView: function () {
      const { selectedCard } = this.data;
  
      //Set the 360 degree image to the sky element.
      const skyEl = document.querySelector("#main-container");
  
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${selectedCard}/place-0.jpg`,
        color: "white"
      });
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "Spiderman",
          url: "./assets/AmazingFantasy15Cover.jpg",
        },
        {
          id: "batman",
          title: "Batman",
          url: "./assets/DetectiveComics27Socer.avif",
        },
  
        {
          id: "superman",
          title: "Superman",
          url: "./assets/ActionComics1Cover.jpg",
        },
        {
          id: "the-flash",
          title: "The Flash",
          url: "./assets/FlashComics1Cover.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
       const thumbnail = this.createThumbnail(item)
       borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive:"box", 
        radiusInner: 9, radiusOuter: 10
      })
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("material", {
        color: "red", opacity: 0.4
      })
      entityEl.setAttribute("cursor-listener", {});

      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive: "box",
        radius : 9
      })
      entityEl.setAttribute("material", {src:item.url})

      return entityEl;
    },
  
    createTitleEl:function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {
        font:"exo2bold",
        align: "center",
        width: 60,
        color: "blue",
        value: item.title
      })
  
      const elposition = position
      elposition.y = -20
      entityEl.setAttribute("position", elposition)
      entityEl.setAttribute("visible", true)
      return entityEl
    }
    
  });
  