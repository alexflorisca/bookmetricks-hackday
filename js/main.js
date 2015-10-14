"use strict";

/**
 * TODO: Think about and write down the challenges of styling when HTML is split across several components
 * TODO: Look into separating the html into separate files
 * TODO: Require .jsx files without specifying jsx extension
 * TODO: Make it a reusable component.
 * TODO: Style it
 */

var React =                 require('react'),
    ReactDOM =              require('react-dom'),
    FilterableMembersList = require('./components/FilterableMembersList.jsx');


var data = [
    {
        country: 'China',
        institutions: [
            {
                name: 'China Agricultural',
                link: '/publishing-services/membership/members/1600017685'
            },
            {
                name: 'China International',
                link: '/publishing-services/membership/members/1600017683'
            }
        ]
    },
    {
        country: 'Austria',
        institutions: [
            {
                name: 'Austria International',
                link: '/publishing-services/membership/members/1600017684'
            }
        ]
    }
];


ReactDOM.render(
    <FilterableMembersList countriesWithMembers={data} />,
    document.getElementById('FilterableMembersList')
);