/*GET home page */
const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'loc8r',
            strapline: "Find place to work woth wifi near you!"
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '200m',
        },{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
/*GET locations info */
const locationInfo = (req, res) => {
    res.render('location-info', {title: "Location"});
};
/*GET review page*/
const addReview = (req, res) => {
    res.render('location-review-form', {title: "Add Review"});
};
module.exports = {
    homeList,
    locationInfo,
    addReview
}