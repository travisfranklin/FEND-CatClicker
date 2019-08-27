// MODEL
///////////////////

// Create a prototype object for generating cats
function Kitty(name) {
  this.name = name,
  this.clickCount = 0,
  this.click = function() {
    String(this).click(function() {
      this.clickCount++
    });
  };
};

// Define the cat names
const cats = [
  'kiki',
  'buckaroo',
  // 'lelouche',
  // 'laHire',
  // 'cheeky',
  // 'whiskers',
  // 'bulgaria',
  // 'mr. Rogers',
  // 'dog'
];

// Define an array in which we can place our cats
let playPen = [];

// Create Objects for each cat based on the cats array
for (let [index ,cat] of cats.entries()) {
  Kitty.prototype.update = function() {
    this.name = cat;
  };
  cat = new Kitty(cat);
  cat.photo = `https://loremflickr.com/200/200/kitten,sleeping/all/?lock=${Math.floor(Math.random() * Math.floor(100))}`;
  playPen.push(cat);
};

///////////////////////////////////////////////////////////////////////////////

// VIEW
///////////////////

// Generate HTML to display cats from playPen array.
for (let cat of playPen) {
  $(`
    <li>
        <div class="cat-unit">
          <div class="cat cat_type18">
            <div class="cat__previewbox">
              <p class="title">${cat.name}</p>
              <img id="${cat.name}" src="${cat.photo}" class="cat__preview" alt="photo of ${cat.name} the cat">
              <p class="count"><span class="${cat.name}clicked">0</span> clicks</p>
            </div>
          </div>
        </div>
      </li>
  `).appendTo('.catListContainer');
};


///////////////////////////////////////////////////////////////////////////////

// CONTROLLER
///////////////////

$('.cat').click(function() {
  clickCounter++;
  $('.clicked').text(clickCounter);
});