// MODEL

// Create a prototype object for generating cats
function Kitty(name) {
  this.name = name,
  this.clickCount = 0
};

// VIEW

// Generate HTML to display cats from playPen array.
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

// Generate HTML to display cat list links
function renderCatList() {
  for (let cat of playPen) {
    $(`
      <li id="${cat.name}__Link" class="catList__Link">${cat.name}</li>
    `).appendTo('.catList__Links');
  };
};

// CONTROLLER

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

// Define an array in which we can place our cats
let playPen = [];

// Create Objects for each cat based on the cats array
for (let [index ,cat] of cats.entries()) {
  Kitty.prototype.update = function() {
    this.name = cat;
  };
  cat = new Kitty(cat);
  cat.photo = `https://loremflickr.com/200/200/kitten,sleeping/all/?lock=${Math.floor(Math.random() * Math.floor(1000))}`;
  playPen.push(cat);
};

// Call function to render cats
renderCatList();
renderCat();


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
  });
});

