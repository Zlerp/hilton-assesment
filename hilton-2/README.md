### Hilton Assessment challenge 2.

#### Running the project

To run this application, Clone it.

then `cd hilton-assesment/hilton-2` into the directory.

Then install the packages required:
```
    yarn install
```

Then run the project locally:

```
    yarn dev
```

you should now be able to open the project in a browser by going to:   
http://localhost:3000/




#### The Build

This challenge tested the understanding of being able to create components, with the state at the top level of this React component (the parent.)

State management was key here as I had to make sure the state of the rooms selected were properly passed down to the child components to render the disabled and enabled rooms based on what the user's actions were. 

I kept the state management in the form component as I needed to submit the state into local stoarge when the user was to submit with Rooms form.

The method I believe I chose to build this really let me add or remove as many Rooms are needed.

I tried to keep it fairly modular without being to granular, but this changes per developers/teams, which I know I can adhere to any standards that are required.

I utilised class components but I could have gone with React Hooks, I was not sure which type of components were wanted as there was no guidelines on what type of components were wanted for the build.
 
The only real item on the challenge that I found difficult was the testing, as I am not too familiar with React testing since Jest.

 
 If I had more time to work on this assessment, I would add tests after learning exactly how to implement them. 
 I would also create a clear button to clear the local storage if a user already submitted the rooms, so it can bee started with default values.
