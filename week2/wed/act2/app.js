let user = {
    firstName: 'Alex',
    lastName: 'Perez',
    addresses: [
        {
            street: '18514 Shadow Line CT',
            city: 'Katy',
            state: 'Texas',
            zipCode: '77449'
        },
        {
            street: '333 Cullen Blvd',
            city: 'Houston',
            state: 'Texas',
            zipCode: '77042'
        }
    ]
}

for(let i = 0; i < user.addresses.length; i++) {
    let addrress = user.addresses[i];
    console.log(addrress);
}