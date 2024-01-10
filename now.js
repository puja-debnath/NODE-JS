const http = require("http")
const fs = require("fs")
const express = require("express")
const path = reuqire("path")

const app = express()

//here express is a middleware, so it will always used with app.use /also to read static data statici used
app.use(express.static(path.join(path.resolve(),"public")))

app.set("view engine", "ejs")
app.get("/",(req,res) =>{
  res.render("index",{name:"pujaaa"})
 
})

const express = require('express');

app.use(express.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
  console.log(req.body); // Access form data submitted from the client
  res.send('Form submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Example of a callback function
function processData(data, callback) {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const processedData = data.toUpperCase();
    // Calling the callback function with the processed data
    callback(processedData);
  }, 1000);
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const products = useSelector(state => state.product.products)


     useEffect(() =>{
          dispatch(fetchAllProductsAsync)
     },[dispatch])

}

// Callback function to handle the processed data
function handleData(result) {
  console.log("Processed data:", result);
}
// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    resolve(data)
  }
  );
}


// Invoking processData and passing handleData as the callback
processData('hello', handleData);


server.listen(3090,() => {
    console.log("server is started")
})