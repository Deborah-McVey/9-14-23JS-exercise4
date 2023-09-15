/* Exercise #4
Objective: Asynchronous Observer with Destructuring

Instructions:

Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
The data passed to each observer's update method should be the list of posts fetched.
Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message. 
Starter code:
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method */

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
        this.observers.push(fn);
        }
	}

	removeObserver(observer) {
		this.observers.this = this.observers.filter((sub) => sub !== fn);
	}

	notifyObservers(data) {
		this.observers.forEach((sub) => sub(data));
	}

	async function fetchAndNotify() {
        try {
		const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const res = await url.json();
		console.log("ASYNC/AWAIT: ", res);
		} catch (err) {
			console.log('err:', err);
		}
		// TODO: Fetch data from the API and notify observers
	};

class Observer {
	update(data) {
		.then((res) => {
		console.log("Data has been updated!", res);
	});
		.catch((err) => {
			console.log("There is a problem here: ", err);
		});
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method	
const subject1 = new Subject();
const thing1 = new Observer();
const thing2 = new Observer();
const thing3 = new Observer();
subject1.addObserver(thing1);
subject1.addObserver(thing2);
subject1.addObserver(thing3);
fetchAndNotify();