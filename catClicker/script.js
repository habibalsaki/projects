var model = {
    currentBat: null,
    batCollection: [
        {
            name: "Cricket Bat",
            src: "img/bat.jpg",
            clicked: 0
        },
        {
            name: "Tennis Bat",
            src: "img/tennis.png",
            clicked: 0
        }
    ]
};

// octopus

var Octopus = {
    init: function(){
        model.currentBat = model.batCollection[0];

        BatList.init();
        BatPanel.init();
        adminPnael.init();
    },

    getBats: function(){
        return model.batCollection;
    },

    getCurrentBat: function(){
        return model.currentBat;
    },

    setCurrentBat: function(value){
        model.currentBat = value;
    },

    incrementCounter: function(){
        model.currentBat.clicked++;
        BatPanel.render();
    }
}

// viewList

var BatList = {
    init: function(){
        this.batItemList = document.getElementById("batList");

        this.render();
    },
    render: function(){
        var bat, elem, i;
        var bats = Octopus.getBats();
        this.batItemList.innerHTML = '';
        for(i=0; i<bats.length; i++){
            bat = bats[i];

            elem = document.createElement("li");
            elem.textContent = bat.name;

            elem.addEventListener('click',(function(thisBat){
                return function(){
                    Octopus.setCurrentBat(thisBat);
                    BatPanel.render();
                }
            })(bat));

            this.batItemList.appendChild(elem);
        }
    }
};



// viewBat

var BatPanel = {
    init: function(){
        this.batElem = document.getElementById("bat-name");
        this.batImage = document.getElementById("bat-image");
        this.batClicked = document.getElementById("bat-clicked");

        this.batImage.addEventListener('click',function(){
            Octopus.incrementCounter();
        })

        this.render();
    },

    render: function(){
        var currentBat = Octopus.getCurrentBat();
        this.batElem.textContent = currentBat.name;
        this.batClicked.textContent = "This has been clicked for " + currentBat.clicked + " times";
        this.batImage.src = currentBat.src;
    }
}

var adminPnael = {
    adminBtn : document.getElementById("admin"),
    adminPanel : document.getElementById("admin-panel"),
    newBatName : document.getElementById("new-bat-name"),
    newBatClick : document.getElementById("new-bat-click"),
    cancel : document.getElementById("cancel"),
    save : document.getElementById("save"),

    init: function(){
        var _this = this;
        this.adminBtn.addEventListener('click',function(){
            _this.showAdminPanel();
        });

        this.cancel.addEventListener('click',function(){
            _this.hideAdminPanel();
        });

        this.save.addEventListener('click',function(){
            var currentBat = Octopus.getCurrentBat();
            currentBat.name = _this.newBatName.value;
            currentBat.clicked = _this.newBatClick.value;
            BatPanel.render();
        });

        this.hideAdminPanel();
    },

    showAdminPanel: function(){
        this.adminPanel.style.display = "block";
    },

    hideAdminPanel: function(){
        this.adminPanel.style.display = "none";
    }

}

Octopus.init();

