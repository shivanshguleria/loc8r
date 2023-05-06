const homelist = (req, res) => {
  res.render('locations-list', { 
    title: 'Home',
    pageHeader: {
      title: "Loc8r - find a place to work with wifi",
      strapLine: "Find places to work with wifi near you!"
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: "125 High Street, Reading RG6 1PS",
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },{
      name: "Burger Queen",
      address: "125 High Street, Reading RG6 1PS",
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance : '250m'
    }]
  });
};

const locationInfo = (req, res) => {
  res.render('location-info', { 
    title: 'Location Info',
    pageHeader: {title: 'Starcups'},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      plReview: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      title: "Starcups",
      rating: 3,
      cord:{
        lat: '51.455041',
        long: '-0.9690884'
      },
      address: "125 High Street, Reading RG6 1PS",
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      time: [{
        days: 'Monday - Friday',
        openTime: '7:00am',
        closeTime: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        openTime: '8:00am',
        closeTime: '5:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }] ,
      review: [{
        rating: 3,
        author: "Simon Holmes",
        timestamp: "16 February 2017",
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      },{
        rating: 3,
        author: "Charlie Chaplin",
        timestamp: "14 February 2017",
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    },
    
  });
};

const addReview = (req, res) => {
  res.render('location-review-form', { 
    title: 'Add review',
    pageHeader: {
      title: "Starcups"
    }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
