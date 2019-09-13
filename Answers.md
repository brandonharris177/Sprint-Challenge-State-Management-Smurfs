1. What problem does the context API help solve?
Prop drilling which is passing props through mulitple components in order to use them where they need to be. Context API allows us to store states in a centralized location and call on them when nessisary. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions 
Actions manage the logic of the app being called on to perform the tasks.
Reducers change the state of the app depending on the imput recived from the actions.
Store holds all the states thus the only place state is stored and is the 'single source of truth'

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is a state like a redux store where the state is held in one place and can be accesed anywhere throughout the app. A good time to use this state would be in larger applications where state needs to be shared with mulitple components.
Component state is state only held in the component and is better to use when that state does not need to leave the application. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It allows us to use action creators as functions so that they only fire when certian conditions are met. Hence we can use it to perfom asynchronous actions if we need to when making API calls or perfoming other tasks.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite State management system is probably the useState hook as it is simple and easy to follow and understand what is going on. That said I do see the value of Redux and I could see myself using it going forward as more practice will hopefully give me a better grasp of how best to use it.
