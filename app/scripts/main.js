
// MODEL
// Create a prototype object for generating cats
function Kitty(name) {
  this.name = name,
  this.clickCount = 0
};

// Define an array in which we can place our cats
let playPen = [];

// VIEW

const view = {
  init: function() {
    // Create HTML snippet VIEW will utilize to render cat images.
    function renderCat() {
      for (let cat of playPen) {
        $(`
          <li id="${cat.name}" class="cat hidden">
            <div  class="cat__previewbox">
              <div class="cat__overlay"></div>
              <p class="title">${cat.name}</p>
              <img src="${cat.photo}" class="cat__preview" alt="photo of ${cat.name} the cat">
              <p class="count"><span class="${cat.name}clicked">0</span> clicks</p>
            </div>
          </li>
        `).appendTo('.catList__Container');
      };
    };

    // Create HTML snippet VIEW will utilize to render cat buttons
    function renderCatList() {
      for (let cat of playPen) {
        $(`
          <li><button id="${cat.name}__Link">${cat.name}</button></li>
        `).appendTo('.catList__Links');
      };
    };
    renderCat();
    renderCatList();
  },
};

// CONTROLLER
const controller = {
  init: function() {

          // Define the cat names
          const cats = [
            'kiki',
            'buckaroo',
            'lelouche',
            'laHire',
            'cheeky',
            'whiskers',
            'bulgaria',
            'mr_Rogers',
            'dog',
            'bucko',
            'marilyn',
            'indy'
          ];

          // Create Objects for each cat based on the cats array
          for (let [index ,cat] of cats.entries()) {
            Kitty.prototype.update = function() {
              this.name = cat;
            };
            cat = new Kitty(cat);
            cat.photo = `https://loremflickr.com/200/200/kitten,sleeping/all/?lock=${Math.floor(Math.random() * Math.floor(1000))}`;
            playPen.push(cat);
          };

          // Call functions to render cats and their respective buttons
          view.init();

          // Add click event listener to cat images
          playPen.forEach(function(cat) {
            $(`#${cat.name}`).click(function() {

              // increment count when clicked
              cat.clickCount++;
              $(`.${cat.name}clicked`).text(cat.clickCount);
            });
          });

          // Add click event listener to cat list links
          playPen.forEach(function(cat) {
            $(`#${cat.name}__Link`).click(function() {

              // toggle visibility on all other cats
              playPen.forEach(function(cat) {
                if(!$(`#${cat.name}`).hasClass('hidden')){
                  $(`#${cat.name}`).addClass('hidden');
                };
              });

              // make the clicked cat visible
              $(`#${cat.name}`).toggleClass('hidden');

              // update admin form with appropriate data
              $('input[name="name"]').val(`${cat.name}`);
              $('input[name="imgUrl"]').val(`${cat.photo}`);
              $('input[name="clicks"]').val(`${cat.clickCount.toString()}`);
            });
          });

          // Add click event listener to admin button
          $('.admin__toggle').click(function() {
            $('.admin__wrapper').toggleClass('opened');
            $('.admin__wrapper').toggleClass('closed');
            $('.admin__toggle').toggleClass('danger');
            if ($('.admin__toggle').hasClass('danger')) {
              $('.admin__toggle').text('close');
            } else {
              $('.admin__toggle').text('admin');
            };
          });


  },
}
controller.init();

