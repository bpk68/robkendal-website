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

You can view the finished multi-item carousel here [https://codesandbox.io/s/react-multi-item-carousel-uvmchp](https://codesandbox.io/s/react-multi-item-carousel-uvmchp "Codesandbox link to React multi-item carousel demo")

### Tools used

For this React multi-item carousel, I've chosen to build it using the [really popular Vite.js](https://vitejs.dev/ "Vite JavaScript bundler") and [Tailwind CSS](https://tailwindcss.com/ "Utility-first CSS framework Tailwind CSS"). Tailwind just allows for rapid building of websites and apps by removing all the fluff of starting with a blank CSS slate, and gives us the utility-based CSS building blocks to quickly put things like this together. 

Vite is just used to bundle and build our JavaScript so React works, but you can use whatever you like. Same with Tailwind -- use any CSS you like, but obviously you'll have to code the matching styles that Tailwind gives us into your version. 

The key point in the demo is the `carousel.jsx` component that we'll see in a minute. 

## Building the multi-image carousel in React

Enough preamble; let's build our multi-image carousel in React and Tailwind.