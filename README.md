# ReactDive

Over the last five months I've been making an app in React Native for work. I've made a few things in React and React Native now and one of the issues I've been encountering is a difficulty with strongly coupled components. The logic ends up in the component workflow and components have very strong dependencies to each other. I'm rather fond of the framework as it's excellent for quick prototyping and making progress early on but I'd like to start thinking more about how to structure my applications in a way that doesn't become a headache for me further on down the line. This is my foray into that.

## Initial Thoughts

I'm going to try and go down an MVC Pattern for this. There's two main reasons for this decision.

1. I've used MVC previously.
2. It's event-listener driven, which feels very JS to me.

Another thing I'm going to try and do is keep React in a very View capacity. One of the issues I'm finding with React is everything becomes React. React is very good at making components. When the components are small and self-contained you can make rapid progress with the framework. However, then you start adding in libraries to manage state, things to interface with APIs, logic, and the whole thing becomes a mess of duct tape and WD40.

## The Philosophy

There's a saying in programming 'Don't reinvent the wheel'. My retort has always been 'but the wheel's the interesting bit'. Which is to say I'm going to try and keep this interesting for me which means I'll probably shun guides and libraries as while they can be interesting... reading is boring. The second thing is don't expect good code here. I'll do what I can but yeah, this is more for me than anything else.

## The App

So I was thinking of doing a Twitter-clone thing... like it's fairly basic as a self contained app and I'm not really planning on making a fully fledged thing here just something simple I can iterate over. However, I did recently get back into fishing so I might make something focused on that. I'm still kind of torn between going React or React Native. I like React because it's quicker to test but I've been doing a fair bit of React Native and... it would be nice to have another app to build.