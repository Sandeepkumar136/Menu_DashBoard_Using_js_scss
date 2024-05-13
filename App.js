const data = [
    { id: 1, item: "Milk Tea", category: "BreakFast", price: "₹ 25.00", description: "A comforting hot beverage made with tea leaves and milk, popular across India.",
        img:"./assets/l-d-i-a-dQdyO9jsixA-unsplash.jpg"
     },
    { id: 2, item: "Red Tea", category: "BreakFast", price: "₹ 30.00", description: "A robust and full-bodied tea with a unique flavor, often enjoyed without milk.",
        img: "./assets/gabi-miranda-d2l4XbFILG8-unsplash.jpg"
     },
    { id: 3, item: "Green Tea", category: "BreakFast", price: "₹ 35.00", description: "A refreshing beverage known for its health benefits, made from unoxidized tea leaves.",
        img: "./assets/laark-boshoff-9T5FvfnmH_k-unsplash.jpg"
     },
    { id: 4, item: "Black Coffee", category: "BreakFast", price: "₹ 30.00", description: "A strong and invigorating beverage made from roasted coffee beans, enjoyed black without milk.",
        img: "./assets/pexels-andrew-4264049.jpg"
     },
    { id: 5, item: "Milk Coffee", category: "BreakFast", price: "₹ 40.00", description: "A rich and creamy beverage made from coffee and milk, a popular choice for a morning boost.",
        img: "./assets/maria-orlova-Gk3ye8HR1tU-unsplash.jpg"
     },
    { id: 6, item: "Alo Paratha With Mix Vegie", category: "BreakFast", price: "₹ 120.00", description: "A hearty Indian breakfast dish made from whole wheat flatbread stuffed with spiced potatoes and served with mixed vegetables.",
        img: "./assets/9195340.jpg"
     },
    { id: 7, item: "Chole Bhature", category: "BreakFast", price: "₹ 109.00", description: "A classic North Indian dish consisting of spicy chickpeas (chole) and deep-fried bread (bhature), a beloved breakfast staple in many parts of India.",
        img: "./assets/10449432.jpg"
     },
    { id: 8, item: "Chapati With Mix Paneer Vegie", category: "BreakFast", price: "₹ 199.00", description: "A wholesome meal of soft chapatis served with a mixed vegetable curry featuring paneer, a type of Indian cottage cheese.",
        img: "./assets/8289765.jpg"
     },
    { id: 9, item: "Chapati", category: "Lunch", price: "₹ 50.00", description: "A versatile Indian flatbread made from whole wheat flour, often served with a variety of curries and lentil dishes.",
        img: "./assets/8289751.jpg"
     },
    { id: 10, item: "Rice", category: "Lunch", price: "₹ 99.00", description: "A staple food in many parts of India, this plain rice can be paired with a variety of curries and lentil dishes.",
        img: "./assets/1463596.jpg"
     },
    { id: 11, item: "Naan", category: "Lunch", price: "₹ 40.00", description: "A soft and fluffy Indian bread made from white flour, typically cooked in a tandoor oven.",
        img: "./assets/ananthan-chithiraikani-de8i6v3qsIw-unsplash.jpg"
     },
    { id: 12, item: "Jira Rice", category: "Lunch", price: "₹ 150.00", description: "A fragrant rice dish cooked with cumin seeds (jira), offering a delightful accompaniment to a variety of Indian curries.",
        img: "./assets/2175101.jpg"
     },
    { id: 13, item: "Matar Paneer", category: "Lunch", price: "₹ 250.00", description: "A popular North Indian curry made with peas (matar) and Indian cottage cheese (paneer) in a rich and spicy tomato-based sauce.",
        img: "./assets/3927993.jpg"
     },
    { id: 14, item: "Sahi Paneer", category: "Lunch", price: "₹ 299.00", description: "A luxurious Indian dish made with paneer in a creamy and aromatic sauce, often garnished with nuts and raisins.",
        img: "./assets/9313972.jpg"
     },
    { id: 15, item: "Mix Veg", category: "Lunch", price: "₹ 199.00", description: "A nutritious and flavorful dish made with a variety of vegetables cooked in Indian spices.",
        img: "./assets/9313972.jpg"
     },
    { id: 16, item: "Chicken Biriyani", category: "Lunch", price: "₹ 199.00", description: "A flavorful and aromatic rice dish cooked with marinated chicken and a blend of special biryani spices.",
        img: "./assets/4622435.jpg"
     },
    { id: 17, item: "Mutton Biriyani", category: "Lunch", price: "₹ 299.00", description: "A rich and hearty rice dish made with tender mutton pieces cooked with aromatic spices and basmati rice.",
        img: "./assets/7875691.jpg"
     },
    { id: 18, item: "Chana Masala", category: "Dinner", price: "₹ 120.00", description: "A popular Indian vegetarian dish made with chickpeas cooked in a tangy and spicy masala gravy.",
        img: "./assets/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg"
     },
    { id: 19, item: "Masala Dosa", category: "Dinner", price: "₹ 129.00", description: "A crispy and savory South Indian crepe filled with a spiced potato filling, served with sambar and chutneys.",
        img: "./assets/6340462.jpg"
     },
    { id: 20, item: "Plain Butter Dosa", category: "Dinner", price: "₹ 99.00", description: "A crispy South Indian crepe made from fermented rice and lentil batter, served with a dollop of butter.",
        img: "./assets/zoshua-colah-VIqcVqZ1uxM-unsplash.jpg"
     },
    { id: 21, item: "Idli Sambar", category: "Dinner", price: "₹ 119.00", description: "A classic South Indian dish of steamed rice cakes (idli) served with a flavorful and tangy lentil soup (sambar).",
        img: "./assets/DSC_0350.jpg"
     },
    { id: 22, item: "Hakka Noodles", category: "Dinner", price: "₹ 99.00", description: "A popular Indo-Chinese dish made with stir-fried noodles, vegetables, and a blend of Indian and Chinese flavors.",
        img: "./assets/IMG_0100.jpg"
     },
    { id: 23, item: "Samosa Chat", category: "Dinner", price: "₹ 79.00", description: "A popular Indian street food dish made with crispy samosas topped with tangy chutneys, yogurt, and spices.", 
        img: "./assets/2-3.jpg"
     },
    { id: 24, item: "Chicken Lolipop", category: "Dinner", price: "₹ 69.00", description: "A popular appetizer made with chicken wings marinated in a spicy and tangy sauce, then deep-fried to perfection.",
        img: "./assets/Chicken-Lollipop-5.jpg"
     },
    { id: 25, item: "Litti With Aloo Chockha", category: "Dinner", price: "₹ 109.00", description: "A traditional dish from Bihar, India, made with stuffed whole wheat dough balls (litti) served with a spiced potato mash (aloo chokha).",
        img: "./assets/litti-chokha-recipe-how-to-make-bihari-litti-chokha-baati-chokha-1-768x1152.jpeg"
     },
    { id: 26, item: "Veg Manchurian", category: "Dinner", price: "₹ 149.00", description: "A popular Indo-Chinese dish made with deep-fried vegetable balls tossed in a spicy and tangy Manchurian sauce.",
        img: "./assets/Veg-Manchurian-2.jpg"
     },
    { id: 27, item: "Milk Chake", category: "Starter", price: "₹ 99.00", description: "A creamy and refreshing beverage made with milk and sugar, a perfect start to any meal." },
    { id: 28, item: "Mango Shake", category: "Starter", price: "₹ 139.00", description: "A sweet and creamy shake made with ripe mangoes and milk, a popular summer treat in India.",
        img: "./assets/Mango_shake_1.jpg"
     },
    { id: 29, item: "Faluda", category: "Starter", price: "₹ 129.00", description: "A popular Indian dessert beverage made with milk, rose syrup, vermicelli, and basil seeds, often served with ice cream.",
        img: "./assets/DSC_0216.JPG"
     },
    { id: 30, item: "Choco Ice-Cream", category: "Starter", price: "₹ 79.00", description: "A delicious and creamy chocolate ice cream, a perfect treat to start or end any meal." ,
        img: "./assets/Chocolate-Ice-Cream-3.jpg"
    },
    { id: 31, item: "Veg Momos", category: "Starter", price: "₹ 109.00", description: "Delicious dumplings filled with seasoned vegetables, a favorite street food in many parts of India.",
        img: "./assets/62ca5b4bc355b9b46a72db730748276b.jpg"
     },
    { id: 32, item: "Chicken Momos", category: "Starter", price: "₹ 169.00", description: "Delicious dumplings filled with seasoned chicken, a favorite street food in many parts of India.",
        img: "./assets/491e658331f003fda80311eb5eeb3fac.jpg"
     }
  ];
  

const sidebar=document.querySelector('.side_bar');
const toggleButton=document.getElementById("function_toggle_button");
const closeBtn=document.querySelector(".bx-chevron-left");
// console.log(sidebar, toggleButton, closeBtn);
const content_Center=document.querySelector(".content-center");
const button_center=document.querySelector(".btn_container");

toggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle("show_time");
});

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove("show_time");
})

