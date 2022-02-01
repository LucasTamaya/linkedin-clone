# Codedamn Projects - LinkedIn Clone
![main image](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Linked%20In%20Clone%20Home%20%5BDesktop%5D.png)

## Hello developer!

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [Full Stack Web Development Learning Path](https://codedamn.com/learning-paths/fullstack) to learn more about how to become an awesome full stack developer.

## Project Overview

NOTE : For mobile views look at the `/designs` folder
### Landing Page

The landing page will be shown in the `/` route. 

![main image](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Linked%20In%20Clone%20Home%20%5BDesktop%5D.png)

### Register

The following should be implement at the `/register` route.

![register page](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Register%20%5BDesktop%5D%20%5BLight%5D.png)

### Sign In

The following should be implement in the `/sign-in` route.

![sign in](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Sign%20In%20%5BDesktop%5D%20%5BLight%5D.png)
### Dashboard

The dashboard should be at URL `/dashboard` 

![dashboard](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Dashboard%20%5BDesktop%5D%20%5BDark%5D.png)

### Create Post 

In the create post modal the user should be able to enter their text and Sharing the image URL is optional

![create post](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Create%20Post%20Modal%20%5BDesktop%5D%20%5BDark%5D.png)

### Post containing the Image 

![post having an image](https://raw.githubusercontent.com/codedamn-projects/linked-in-nextjs-clone/master/designs/Showing%20Image%20in%20Dashboard%20%5BDesktop%5D%20%5BDark%5D.png)

## API Routes 

### `/api/auth/signin`

To verify the user credentials on Sign In 

### `/api/auth/register` 

To register a new user and add the document to the database
### `/api/posts`

The code to be written in `/api/posts/index.js`

Should return the json of the posts, so that they can be shown in the `/dashboard`

### `/api/posts/[id]`

Required to delete the post. So on API call the post should be deleted on the database and removed from the UI


### MongoDB user document
```
{
    _id: ObjectId(),
    name: <string>,
    email: <string>,
    password: <string>,
    timestamp: <date>
}
```

### MongoDB Post Document
```
{
    _id: ObjectId(),
    name: <string>,
    message: <string>,
    imageURL: <string>,
    likes: <int>
}
```

### Ports 
The Codedamn Playgrounds exposes only `1337` and `1338` ports on the internet. So you'll be using `localhost` for connecting to the mongodb instance as they are hosted on the same docker container. You can specify it as `localhost:27017` or simple write `localhost`. 

## Recommended Technologies 

1. Mongoose for mongodb object modelling and effective type system 
1. Tailwind CSS for User Interface
1. `@mui/icons-material`. You can use their [website](https://mui.com/components/material-icons/) to pick up icons for the project. 

There is no restriction for using mui, you can free to choose any other icons for your project.


## Instructions

Your challenge is to build out this project and get it looking as close to the design as possible.

You can use **any tools or technologies** you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your project should:

-   Be responsive for desktop and mobile phones
-   Have minimum functionalities and effects working


Want some support on the challenge? [Join our discord community](https://cdm.sh/discord) and ask questions in the **#general** channel.

There is no limit you can go beyond the mentioned criteria and create additional functionalities


## Where to find everything

Your task is to build out the project as per the provided screenshots. You will find both a mobile and a desktop version of the design.

The designs are in image formats can be found in `/designs`.

You will find all the required required images in the `/public` folder

There is also a `style-guide.html` file containing the information you'll need, such as color palette and font names. Make sure to open this in the browser to see the contents.

## Want to do more

1. You can build OAuth2 for Sign In and Registration
1. Creating the network page and having Connections

## Send feedback!

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit [codedamn feedback page](https://codedamn.com/contact)