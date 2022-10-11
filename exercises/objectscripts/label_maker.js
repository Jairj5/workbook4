let contact = {
    name : "Jair Jabriel",
    address: "4701 robert dr.",
    city: "atlanta",
    state: "Georgia",
    zip: "30034",


};

function printContact(myInfo) {
console.log(myInfo.name);
console.log(myInfo.addressLine1);
console.log(myInfo.city + ","+ myInfo.state + " " + myInfo.zip);
console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
}
printContact(contact);