# SimpleShop <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>

School project on 3rd semester, created with React

### Live demo:

tomineodegard-simpleshop.netlify.app

## This was the assignment, and the suggested process:

1. Create a new project
2. Create the components from the screenshot
3. Add state to App.js (products) and fetch in this: https://kea-alt-del.dk/t7/api/products
4. Pass down the data to the relevant components (App=>ProductList)
5. In ProductList, map through the products (and create Product’s)
6. Create a new state to App called basket (const [basket,setBasket] = useState([])
7. Pass that state and it’s updater function down to Product and Basket
8. In Product, add a button “Add to Basket” which uses the setBasket function to add that product to the basket

- Bonus if you can check if it’s already there and then update an amount in stead

9. In Basket, show the products from the basket state
10. Show the total price as well (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects Array/reduce)
11. In Basket, add a button to each product so that it can be removed from the users basket (setBasket)
12. In CheckoutForm, add a form to fill in some information

- Bonus if you can store the entered data in a database

13. Bonus step: Give each Product it’s own state const [showMore, setShowMore] = useState(false) and use it to toggle a read more thingy in the Product
