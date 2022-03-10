---
date: 2022-03-10T09:13:41
published: false
title: How to build a multi-image carousel in React and Tailwind
description: Ever wanted to learn how to build a multi-item carousel in React? Well,
  in this article we'll do just that by building a multi-item or multi-image carousel
  in vanilla React using Vite.js and some Tailwind CSS
featuredimage: "/img/react-multi-item-carousel-blog-header.png"
featured: true
tags:
- Tutorial
- Development
- React

---
![Blog header image for React multi-image carousel](/img/react-multi-item-carousel-blog-header.png "Blog header image for React multi-image carousel")

I had a client project recently that required some nifty coding to produce **a multi-item carousel in React**. Really, it was a **multi-image carousel** with a few extra bits, but as we'll soon see, what we'll build in this article can be easily modified to suit whatever multi-items you'd like to stuff into your carousel.

Let's get building.

## What we'll be building

To be honest, it's difficult to find a solid definition of what exactly a 'multi-item carousel' or 'multi-image carousel' is, let alone finding a good example of one built in React. Sometimes it seems the terms 'carousel', 'slider', and others get all interchanged and mingled around to the point where it can be confusing...

My definition or requirements looked like this:

> I wanted to create a fixed-width container that housed several child items (mainly images with overlays for my purposes) arranged horizontally with an equal gap between them. Any child items that overflowed the container's bounds would be hidden offscreen, yet scrollable to bring them into view along the horizontal axis.

See the following image to illustrate what I mean:

![Example of how a multi-item carousel can work](/img/muti-item-carousel-example.png "Example of how a multi-item carousel can work")

There are some existing packages in the wild, such as this one [react multi carousel](https://www.npmjs.com/package/react-multi-carousel), which is worth a look, but often they're too complex, or just not what we need.

What we're building here is a simple, minimal (as possible), example that fits the definition above, and to my mind embodies the wider definition of a multi-item carousel built in React.

You can view the finished multi-item carousel here [https://codesandbox.io/s/react-multi-item-carousel-uvmchp](https://codesandbox.io/s/react-multi-item-carousel-uvmchp "Codesandbox link to React multi-item carousel demo").

Also, there's a repo with the code in here, [react-carousel on GitHub](https://github.com/bpk68/react-carousel).

### Tools used

For this React multi-item carousel, I've chosen to build it using the [really popular Vite.js](https://vitejs.dev/ "Vite JavaScript bundler") and [Tailwind CSS](https://tailwindcss.com/ "Utility-first CSS framework Tailwind CSS"). Tailwind just allows for rapid building of websites and apps by removing all the fluff of starting with a blank CSS slate and gives us the utility-based CSS building blocks to quickly put things like this together.

Vite is just used to bundle and build our JavaScript so React works, but you can use whatever you like. Same with Tailwind -- use any CSS you like, but obviously you'll have to code the matching styles that Tailwind gives us into your version.

The key point in the demo is the `carousel.jsx` component that we'll see in a minute.

## Building the multi-image carousel in React

Enough preamble; let's build our multi-image carousel in React and Tailwind, starting with the scaffolding parts.

The exact set-up with Vite and Tailwind is outside the scope of this article, so I'm assuming you have some sort of React project set up and ready to go that also has Tailwind installed and configured.

### Carousel data

In the finished demo you'll see that each carousel item looks like this:

    <div key={index} className="...">
    	<a 
        	href={resource.link} 
            className="..."
    		style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
    	>
    		<img
    			src={resource.imageUrl || ''}
    			alt={resource.title}
    			className="..."
    		/>
    	</a>
    	<a href={resource.link} className="...">
    		<h3 className="...">
            	{resource.title}
    		</h3>
    	</a>
    </div>

And that's it. That's a single carousel item. I've omitted the Tailwind classes from this to keep it a little cleaner, but you can see that this could be whatever you like to show in the carousel, I've just gone with images inside a clickable link, then a heading level 3 that will be displayed on hover. 

The main point here is that we're pulling data in to use where we have things like `href={resource.link}` from a file `data.json`, which looks like this:

    {
      "resources": [
        {
          "title": "Find me on Twitter",
          "link": "https://twitter.com/kendalmintcode",
          "imageUrl": "https://placeimg.com/300/300/any"
        },
        {
          "title": "Welcome to Ark Labs",
          "link": "https://ark-labs.co.uk",
          "imageUrl": "https://placeimg.com/300/300/animals"
        },
        {
          "title": "Some sort of third title",
          "link": "https://twitter.com/kendalmintcode",
          "imageUrl": "https://placeimg.com/300/300/architecture"
        },
        
        ...other entries
        
        {
          "title": "Super item number the last",
          "link": "https://twitter.com/kendalmintcode",
          "imageUrl": "https://placeimg.com/300/300/tech"
        }
      ]
    }
    

You can see we have a title, link URL and image source URL in an array of objects called resources. When this `data.json` file is imported into the carousel component we can loop through each resource item, which will become a single carousel item. 

Again, you could bend this to your needs and this data might even come from an API (the real project I use this in does just that), but it'll keep things cleaner inside our carousel component for now.

### Basic styles

The only other thing to highlight from the demo point of view is the starting styles. In the main App component, `app.jsx` we have this:

    function App() {
      return (
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <Carousel />
        </div>
      );
    }

Really simple and all it's doing is pulling in the carousel component and wrapping it in a div with some basic tailwind classes on it, to fix the width on very large screens and add some nice padding around the carousel for nicer display purposes.

Next, in the `styles.css` file, some basic CSS:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    html,
    body {
      padding: 0;
      margin: 0;
    }
    
    * {
      box-sizing: border-box;
    }

Up top we have the necessary Tailwind imports, then we just strip off the padding and margin from body and HTML, and set all box-sizing to `border-box`. 

Again, these styles aren't super important for your purposes, but I want to be clear up-front about where some minor little display styles are and what they're doing.

## The multi-item carousel component

And now, the part you've been waiting for, the main carousel component itself. In the `carousel.jsx` component you'll see the following imports:

    import { useState, useRef, useEffect } from 'react';
    
    // Data
    import data from './data.json';

We've already mentioned the data that we're pulling in 

### The carousel JSX

We'll start with

### The carousel logic

## Viewing the final demo

Here's the finished carousel code embedded via CodeSandbox:

    <iframe src="https://codesandbox.io/embed/fragrant-feather-uvmchp?fontsize=14&hidenavigation=1&theme=dark"
         style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
         title="react-multi-item-carousel"
         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
       ></iframe>