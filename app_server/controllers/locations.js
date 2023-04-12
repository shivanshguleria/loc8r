/*GET home page */
const homeList = (req, res) => {
    res.render('index', {title: "Home"});
};
/*GET locations info */
const locationInfo = (req, res) => {
    res.render('index', {title: "Location"});
};
/*GET review page*/
const addReview = (req, res) => {
    res.render('index', {title: "Add Review"});
};

module.exports = {
    homeList,
    locationInfo,
    addReview
}