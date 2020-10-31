# Platter: manage your restaurant, staff, and customers
Hosted with Heroku @ https://--------.herokuapp.com/

## About 
# Platter: all-in-one CRM software for restaurants and catering services to serve their customers, manage their staff, and simplify their accounting

## Features
```
Restaurant vs restaurant's customers perspectives (2)

Restaurant can display their list of foods w/ their prices
- Can also alter the list of foods (remove/add items, change prices) (Lv. 1)
- Can add customizability to individual items, such as what not to include in a burger, allergies, etc..., will automatically adjust cost (same as normal price changes) (Lv. 2)
- Can view the list of orders made by customers (Lv. 3)
- Can assign different progress levels of each order (todo, in progress, done), as well as ETA (Lv. 3)
- Can display status of order to customer, as well as ETA (Lv. 3)

Customers can view the list of foods w/ their prices
- Can also order foods (cart system) where they can have X amount of Y items (adding/removing is easy to implement) (Lv. 1)
- Can customize their food to their preference, and view their custom order as well as cost (Lv. 2)
- Can view details of their order (the list of items) (Lv. 3)
- Can view order status as well as ETA (Lv. 3)

TODO (description): 
- Restaurant management: tables/employees/staffing
- Restaurant accounting (total sales info/analytics)

```

## Example format of objects
```
{
	cafes
	{
		name: {type: String, default: "Name"},
		type: {
			type: String,
			default: "Cafe",
			enum: ["Cafe", "Restaurant", "Other"]
		},
		wifi: {
			available: {type: Boolean, default: false},
			name: {type: String, default: ""},
			// TODO: encrypt password
			password: {type: String, default: ""},
			fast: {type: Boolean, default: false}
		},
		outlet: {type: Boolean, default: false},
		bathroom: {
			available: {type: Boolean, default: false},
			locked: {type: Boolean, default: false},
			key: {type: Boolean, default: false},
			code: {type: String, default: ""},
			clean: {type: Boolean, default: false}
		},
		clean: {type: Boolean, default: true},
		busy: {
			morning: {type: Boolean, default: false},
			afternoon: {type: Boolean, default: false},
			evening: {type: Boolean, default: false}
		},
		parking: {type: Boolean, default: false}
	}
}

```

## Links
**Convert HTML/Pug**
-- https://html2jade.org/

**Trello board**
-- https://trello.com/b/---------

**Template project code**
- React/NodeJS
-- https://github.com/Julchu/Dialer
-- https://github.com/Julchu/testingreactnode
- NodeJS boiler plate
-- https://github.com/Julchu/CheapCut
-- https://github.com/Julchu/ChatApp
-- https://github.com/Julchu/TeaWork

