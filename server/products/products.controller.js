exports.get = async (req, res, next) => {
    // Just return a hard-coded product for now
    res.json({
        product: {
            product_serial: 1,
            title: "Some Watch"
        }
    });
}
