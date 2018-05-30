# Brotherhood App

A simple app to register and manage brotherhoods. Main view contains a registration form protected by a ReCAPTCHA, with an admin route protected by a login form. Front-end uses React, with Django using the Django REST Framework to manage requests on the back-end. Authentication is done through JWT.

## Getting Started

### Prerequisites

To run this app, you'll need both [npm](https://www.npmjs.com/) and [Python 3.6](https://www.python.org/).

### Installing

Clone this respository using `git clone https://github.com/adelrodriguez/brotherhood-app`

#### Installing the API

Create a new virtual environment using [virtualenv](https://virtualenv.pypa.io/en/latest/index.html), to isolate the dependencies from other projects.

```bash
virtualenv env
source env/bin/activate
```

Change into the `api` directory and install the requirements:

```bash
cd api
pip install -r requirements.txt
```

Now we need to apply the migrations:

```bash
python manage.py migrate
```

And create an initial user:

```bash
python manage.py createsuperuser --username admin --email admin@brotherhood.app
```

After that, you can test if the API is running correctly by running:

```bash
python manage.py runserver
```

#### Installing the client

Change into the `client` directory and install the requirements:

```bash
cd client
npm install
```

After that you can run the app by running:

```bash
npm start
```

### Running the app



## Built With

* [Django](https://www.djangoproject.com/)
* [Django REST Framework](http://www.django-rest-framework.org/)
* [React](https://reactjs.org/)
* [create-react-app](https://github.com/facebook/create-react-app)
* [Redux](https://redux.js.org/)
* [Bulma](https://bulma.io/)
* [JWT](https://jwt.io/)