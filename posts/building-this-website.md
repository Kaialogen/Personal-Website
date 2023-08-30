---
title: 'Building this website'
date: '2023-08-30'
---


When I first decided to build this website, I had a vague idea and a blank canvas. Fast forward to today, and I'm thrilled to share the details of the creative process, the technical challenges, and the decisions I made along the way. If you've ever been curious about how to go from an abstract idea to a functional website, read on!


1. The Spark of Inspiration

Every website begins with an idea. For me, the idea was to create a space where I could share my cyber security research and knowledge with the world. I envisioned a platform that would be simple to understand and find information, be simple to find ways to follow my research and have relevant resources to learn more.


2. Choosing the Right Tools

My background is not web development. I would say that my programming skills would just cover the basics, so creating a website would need to be manageable and achievable. My first thought was why not just build the website using tools like [Wordpress](https://wordpress.com/) or [Squarespace](https://www.squarespace.com/). This idea I did not like, I wanted to learn how to become a better programmer, and this method did not allow that. I also do all my note taking in [Obsidian](https://obsidian.md/) so markdown support was a must. For my Computer Science A-Level Project I made a basic social media website using PHP and in my university second year I made multiple websites using PHP. This was a possibility as I had experience and new the tools, I chose not to as I felt burnt out with PHP and wanted a new challenge.

I had heard about a popular technology called [React](https://react.dev/) and decided to check it out. It was everything I needed and more (Apart from the fact it is owned and developed by Meta). I did some more research and settled on using the [Next.js](https://nextjs.org/) framework made by Vercel. 

3. Coding & Development

The basic development setup I use is; a Ubuntu WSL instance on my Windows computer with [Node.js](https://nodejs.org/en) as the server. I then connect to the wsl instance thorugh visual studio code. I then push all the code to a private repository on Github, where Github actions pushes the code to my vercel server. 

4. Challenges Along the Way

No journey is without its bumps. During the development process, I ran into issues with responsive design. Ensuring the website looked great on all devices - from desktops to mobile phones - required a lot of tweaking and testing. Another challenge was optimizing the website for speed.

5. Launching to the World

With everything in place and tested, it was time to launch. I chose to host on Vercel's cloud platform , set up an SSL certificate for security, and, after a few last-minute tweaks, hit the "publish" button.

### In Conclusion

Building this website was both a challenge and a joy. I learned a ton, not just about coding and design, but also about perseverance and problem-solving. If you have an idea for a website or any project, I urge you to start. The journey might be long and filled with obstacles, but the destination makes it all worth it.