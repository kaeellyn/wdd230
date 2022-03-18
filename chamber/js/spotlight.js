const companiesURL = 'https://kaeellyn.github.io/wdd230/chamber/js/data.json';

const spot1name = document.querySelector('#spot1name');
const spot1img = document.querySelector('#spot1img');
const spot1slogan = document.querySelector('#spot1slogan');
const spot1web = document.querySelector('#spot1web');
const spot1contact = document.querySelector('#spot1contact');

const spot2name = document.querySelector('#spot2name');
const spot2img = document.querySelector('#spot2img');
const spot2slogan = document.querySelector('#spot2slogan');
const spot2web = document.querySelector('#spot2web');
const spot2contact = document.querySelector('#spot2contact');

const spot3name = document.querySelector('#spot3name');
const spot3img = document.querySelector('#spot3img');
const spot3slogan = document.querySelector('#spot3slogan');
const spot3web = document.querySelector('#spot3web');
const spot3contact = document.querySelector('#spot3contact');

fetch(companiesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject["companies"];
        let sortedCompanies = companies.sort(function () {
            return 0.5 - Math.random();
        });
        sortedCompanies.forEach(SpotlightCompanies);
    });

let bronzeMembers = {};
let silverMembers = {};
let goldMembers = {};

function SpotlightCompanies(company) {
    if (company.membership == "bronze") {
        Object.assign(bronzeMembers, company);
    }
    if (company.membership == "silver") {
        Object.assign(silverMembers, company);
    }
    if (company.membership == "gold") {
        Object.assign(goldMembers, company);
    }

    spot1name.textContent = goldMembers.company;
    spot1img.setAttribute('src', goldMembers.logo);
    spot1img.setAttribute('alt', `logo of ${goldMembers.company}`);
    spot1img.setAttribute('loading', 'lazy');
    spot1slogan.textContent = `"${goldMembers.slogan}"`;
    spot1web.textContent = goldMembers.website;
    spot1contact.textContent = goldMembers.contact;

    spot2name.textContent = silverMembers.company;
    spot2img.setAttribute('src', silverMembers.logo);
    spot2img.setAttribute('alt', `logo of ${silverMembers.company}`);
    spot2img.setAttribute('loading', 'lazy');
    spot2slogan.textContent = `"${silverMembers.slogan}"`;
    spot2web.textContent = silverMembers.website;
    spot2contact.textContent = silverMembers.contact;

    spot3name.textContent = bronzeMembers.company;
    spot3img.setAttribute('src', bronzeMembers.logo);
    spot3img.setAttribute('alt', `logo of ${bronzeMembers.company}`);
    spot3img.setAttribute('loading', 'lazy');
    spot3slogan.textContent = `"${bronzeMembers.slogan}"`;
    spot3web.textContent = bronzeMembers.website;
    spot3contact.textContent = bronzeMembers.contact;
}



