let openCart = document.querySelector('.cart');
let closeCart = document.getElementById('closeCart');
let list = document.getElementById('tours');
let cartList = document.getElementById('cartList');
let body = document.getElementById('body');
let total = document.getElementById('total');
let quantity = document.getElementById('quantity');


openCart.addEventListener('click', () => {
    body.classList.add('active');
});
closeCart.addEventListener('click', () => {
    body.classList.remove('active');
})

let tours = [
    {
        id: 1,
        name: "Hacarmel market",
        price: 250,
        duration: "3 hours",
        shortDescription: "A tour in the best market in Tel Aviv! Taste international flavors with the best Israeli environment.",
        description: `<p> Hacarmel Market in Tel Aviv is known for its unique flavors, music and history. </p><p> You will meet the Basta's sellers and hear their stories and you will meet a whole world that connects between culture, history and food.</p>
        <p> You can try on this tour flavors from all over the world- from south America to the East.You will walk around the side twisting alleys with a cold glass of wine, meet the neighborhoods near the market and hear a live music concert.</p>
         <h5>What will you taste?</h5>
    <ul><li> Organic Asai ice - cream</li><li> Fresh fish and chips</li><li>  Variety dishes from the best street food awarded stand</li><li>  The best Turkish bourekas in town</li><li> Pulled apart meat in a frena bread</li><li>  Special malabi and a black coffee for dessert</li><li> Unlimited red and white wine</li></ul>`,
        image: "/images/hacarmel.jpg",
    },
    {
        id: 2,
        name: "Lewinsky market",
        price: 250,
        duration: "2.5 hours",
        shortDescription: "Old market with new people and amazing food! It's time to try authentic traditional dishes combined with modern flavors.",
        description: `<p>You can't miss this culinary gem- the colorful Lewinsky market!</p><p> For the nostalgic part, you'll fall in love with all the exotic spices smells, eat traditional dishes in special restaurants and listen to surprising stories about the neighborhood and the people behind the dishes.</p><p> For the contemporary part, you'll try dishes from the best new culinary projects of the best young chefs, watch the beautiful street art and learn about the changing population and what will be in the future in this multicolored market.</p><h5> What will you taste?</h5><ul><li> The best Bourekas in Israel</li><li>Special smoked fishes from a boutique delicatesse</li><li> A real Kuba</li><li> Special spices and a stew with a surprising addition</li><li>Khachapuri from a Georgian restaurant</li><li>Cheese plate with zucchini flowers filed with goat cheeses and some more surprises from a 100 years delicatesse</li><li>Addictive dessert from an American bakery</li><li>Unlimited red and white wine</li></ul>`,
        image: "/images/lewinsky.jpeg",
    },
    {
        id: 3,
        name: "Hatikva market",
        price: 250,
        duration: "2.5 hours",
        shortDescription: "Join us to an authentic experience and traditional dishes tour in this welcoming market.",
        description: `<p> Hatikva market exists for the neighborhood citizens and not for outsiders, and this is his big secret. Therefore, you can find there the most authentic experience, with family environment and with real authentic traditional food made with a lot of love, just like the locals loves it- not fancy but very accurate and with amazing flavors.</p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Water Bourekas – surprising combination between bourekas and lasagna</li>
        <li>Yeman pastries that makes you dance </li>
        <li>Cheese, olives and pickles from a famous delicatesse</li>
        <li>Amazing kubas from different kinds</li>
        <li>Bukhari bread from the tabun </li>
        <li>A fascinating lesson about the spices we all know </li>
        <li>Sweet malabi</li>
     <li>Unlimited red and white wine</li></ul>`,
        image: "/images/hatikvaMarket.webp"
    },
    {
        id: 4,
        name: "Kerem Hateimanim",
        price: 250,
        duration: "3 hours",
        shortDescription: "Night culinary tour in one of the best food parties in town, with authentic, exotic and special foods.",
        description: `<p>Don’t let the neighborhood sleepy look to miss led you. At sunset the atmosphere changes and you can find impressive music and culinary in this curious and interesting neighborhood. </p>
    <p>In the past, you could find this kind of unique experience and joy just abroad, when all the streets filled with chairs and tables and there is a bohemian cool feeling in the air. </p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Tasting plate from an Ethiopian restaurant with fascinating story</li>
        <li>Many kinds of Georgeann pastries </li>
        <li>Dishes from an authentic Yemen restaurant</li>
        <li>Fresh seviche with fried rice</li>
        <li>Malabi and black coffee for dessert</li>
         <li>Unlimited red and white wine</li></ul>`,
        image: "/images/kerem.jpg"
    },
    {
        id: 5,
        name: "Florentine",
        price: 270,
        duration: "3.5 hours",
        shortDescription: "Looking for a tour that will fill your stomach and your head? This one is tailor made just for you!",
        description: `<p> We invite you to join us in a tour in the youngest and most chic neighborhood in town that combines between street art and international culinary perfectly. </p>
    <p>Between a European dish to a dreamy taste from exotic country, you'll absorb the special place atmosphere, have a close look at the unique street art, listen to fascinating stories about the foodies that opened restaurants and stands in the neighborhood, dive into Bialik's legend that became a street, go back to the underground fighters who worked in the neighborhood and understand how the special florentinian character was created.</p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Special salted Crepe from France</li>
        <li>Best pizza in Tel Aviv </li>
        <li>Delicious roust beef in a croissant and a special apples arak drink</li>
        <li>Khachapuri from a Georgian restaurant</li>
        <li>Malabi and black coffee for dessert </li>
        <li>Unlimited red and white wine</li></ul>`,
        image: "/images/florentin.jpg"
    },
    {
        id: 6,
        name: "Jaffa Flea market",
        price: 235,
        duration: "2 hours",
        shortDescription: "You are all welcome for a lovely culinary tour in the new edition of the flea market in magical Jaffa.",
        description: `<p>Jaffa is a magical city that offers a unique environment. The best way to know Jaffa is by smell and taste senses. The most popular area is the flea market, which was in the past a place for second handed stores and family businesses. Today the market evolved and changed and you can find there design stores, cafes and restaurants. Thanks to this change, the area became an attractive place for the youngs and tourists from all over the world.</p>
    <p>Its time for you to join us in a waking senses and appetite tour, where you'll feel the vibrant atmosphere in one of the coolest and most fun compound int the city.</p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Special Arabic hummus with tahini and yogurt</li>
        <li>Mafrum and chirchi from a Tripolitanian restaurant </li>
        <li>Fish, cheese and delicious deeps in amazing delicatesse</li>
        <li>Bulgarian bourekas</li>
        <li>Handmade Knaffe </li>
        <li>Unlimited arak </li></ul>`,
        image: "/images/flea.jpg"
    },
    {
        id: 7,
        name: "Mahne Yehuda",
        price: 270,
        duration: "3 hours",
        shortDescription: "Culinary tours in Mahne Yehuda were always popular, but we decide to turn the market tour to a chic!",
        description: `<p>During the tour in Mahne Yehuda you'll taste authentic Jerusalem flavors, just like the locals, but with the excitement of a tourist. You will hear secrets and interesting stories which are hiding inside the market and meet the long history of the market. </p>
    <p>We will walk inside the market and in the alleys around it and meet a lot of big pots with special dishes from different cultures and families, standing one next to each other in tha stands.</p>
    <p>An extraordinary experience is waiting for you, really satisfaying and with a special Jerusalem environment!</p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Fresh natural and healthy drink</li>
        <li>Juicy Donner kabab (Turkish shawarma) </li>
        <li>Rolled malawach full of surprises</li>
        <li>Kuba soup </li>
        <li>Local hummus dish</li>
        <li>Bruschetta with smoked juicy beef </li>
        <li>The best rugalach in Israel </li>
     <li>Unlimited arak </li></ul>`,
        image: "/images/mahneYehuda.jpg"
    },
    {
        id: 8,
        name: "Wadi Nisnas",
        price: 240,
        duration: "3.5 hours",
        shortDescription: "Culinary tours in wadi Nisnas gives a pick into backstage of Haifa's restaurants and their special dishes.",
        description: `<p>Join us to a pastorale tour in one of the most magical places in Israel that symbolizes the perfect harmony between the 3 religious – wadi Nisnas market in Haifa city. </p>
    <p>During the tour we will meet the restaurants and stands owners, some of them exists in the market more then 40 years, we'll get some inspiration fron them for unique authentic cooking, we'll expose the rich variety of raw materials they get from the market and absorb the special one in a lifetime atmosphere. </p><br>
    <h5>What will you taste?</h5>
    <ul>
    <li>Fresh seviche </li>
        <li>Traditional Arabic pastry </li>
        <li>Mustafa's unique coffee and carobs honey and pistachios roulade </li>
        <li>Handmade authentic dishes</li>
        <li>Local unique hummus dish </li>
        <li>Smoked meats plate in Spanish environment</li>
        <li>Local Knaffe for dessert</li>
     <li>Unlimited cold ouzo </li></ul>`,
        image: "/images/wadi.jpg"
    },
    {
        id: 9,
        name: "Talpiot market, Haifa",
        price: 220,
        duration: "2 hours",
        shortDescription: "The market that keeps being young and modern and still keeps its addictive authenticity at the same time.",
        description: `<p>Talpiot market established on 1940 to replace the existed markets. During the years, there were dramatic changes in the market that almost cost him in closure for few times.</p>
<p>However, the market survived and stayed and today it is one of the most unique, livable and pleasant markets in Israel. </p>
<p> you are welcome to a tour of old against new, traditional against modern, fascinating and exciting stories and meeting with the amazing people that keep holding this market alive and refuse to give up on it. You will go throw old times bakeries, knafe stands, authentic Arabic restaurants, cool and young cocktail bars, chef restaurants and graffiti walls. Talpiot market cherish inside of it all the good things. It is going to be interesting and especially tasty! </p>

<h5>What will you taste?</h5>
<ul>
<li>Pastries from a familial bakery since 1960 </li>
<li> Unique Hummus</li>
<li> Caucasian food </li>
<li> Arabesque- enjoy the familial traditional tastes with secret recipes that transfers between generations in small familial restaurant. </li>
<li>Have some Israeli beer tasting in the market</li>
<li>Drink Mexican coffee</li>`,
        image: "/images/talpiot.jpg"
    },
];

function showTours() {
    for (let tour of tours) {
        document.getElementById("tours").innerHTML += `
        <div class="col-lg-4 col-md-6 marketCard">
        <div class="card" style="width: 19rem;">
                <img src=${tour.image} class="card-img-top" alt=${tour.name}>
                    <div class="card-body">
                        <h5 class="card-title">${tour.name}</h5>
                        <p class="card-text">${tour.shortDescription}</p>
                        <p class="card-text"><i class="fa-regular fa-clock"></i> <b>Duration:</b> ${tour.duration}</p>
                        <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn w-100 transferBtn" onclick="setModal(${tour.id - 1})">View Tour</a>
                    </div>
            </div>
        </div>`
    }
}
showTours();

function setModal(id) {
    document.getElementById("title").innerText = tours[id].name;
    document.getElementById("modalText").innerHTML = `<p class="modal-text"> ${tours[id].description}</p><p><i class="fa-regular fa-clock"></i><b> Duration:</b> ${tours[id].duration}</p><h4 class="price text-end">Price: ${tours[id].price} NIS</h4><button class="btn addToCart mb-1" onclick="addToCart(${id})"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>`;
}

quantity = 0;

function addToCart(id) {
    let listItem = document.getElementById('chosenTours');
    let tour = tours[id];
    listItem.innerHTML += `<li><button class=" btn btnRemove" onclick="removeFromCart(${tour.id - 1})"><i class="fa-regular fa-square-minus"></i></button> ${tour.name} - ${tour.price} NIS</li>`;
    quantity++;
    document.getElementById('quantity').textContent = quantity;

    let cartItems = listItem.getElementsByTagName('li');
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i].innerText;
        let price = item.split('-')[1];
        totalPrice += parseInt(price);
    }
    total.innerText = `Total: ${totalPrice} NIS`
}

function removeFromCart(id) {
    let listItem = document.getElementById('chosenTours');
    let tour = tours[id];
    let cartItems = listItem.getElementsByTagName('li');

    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i].innerText;
        let price = parseInt(item.split("-")[1]);
        totalPrice += price;

        if (item.includes(tour.name)) {
            listItem.removeChild(cartItems[i]);
        }
    }
    quantity--;
    document.getElementById('quantity').textContent = quantity;

    totalPrice -= tour.price;
    document.getElementById('total').innerText = `Total: ${totalPrice} NIS`;
}

total.addEventListener('click', () => {
    alert("Thank you for your purchase! We will contact you for payment and choosing day for your tour.");
    document.getElementById("cartList").innerText = "";
    document.getElementById("total").innerText = "Total: 0 NIS";
    document.getElementById("quantity").innerText = "0";
    body.classList.remove('active');
});


