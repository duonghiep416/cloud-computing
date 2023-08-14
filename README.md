# cloud-computing

```js
//search
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/search", async (req, res) => {
    const query = req.query.q; // Get the search query from the query parameter
    console.log(query);
    try {
        const searchResults = await searchProducts(query);
        console.log(searchResults);
        res.render("toy-manager", { products: searchResults });
    } catch (err) {
        res.status(500).json({ message: "Error searching for products" });
    }
});
```
