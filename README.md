# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## creation of a react app .

npx create-react-app appname

### Key fEATURES OF rEACT js
1. Component-based architecture : components are reusable pieces of UI that can be composed together to form complex interfaces.  

navbar : component 1  

image : component 2 
                             ----------------->   Main component  App.js ()
paragraph : component 3 

footer  : footer section  


export default function Navbar(){
    return(

    )
}

<!-- functional components -->
export default function App(){

    const fetchUser = () => {
        fetch()
           .then()
    }

    fetchUser()

      return(
        <Navbar/> : nav links takes me to another component called contact us 
        <Image/>
        <Paragraph/>
        <Footer/>
      )
}

Create a form  component

export default function FormComponent(){
    return(

    )
}

export default function ContactUs(){
    return(
          <Navbar/>
         <FormComponent/>
    )
}

export default function QuotationForm(){
    <FormComponent/>
}

function NameofComponent(){
   const nameoffucntion = () => {

   }

}

export default NameofComponent;


2. JSX syntax : A syntax extension that allows devs to write HTML like code within JS. 
3. Virtual DOM : A lightweight representation of the real DOM.  React only updates the Virtual DOM , then determines the most efficient way of updating the real 
DOM 
This approach improves performances especially with complex UI's 
4. State and Props 
   - This is how react manages data. 
   - State allows components to create and manage their own data 
   - Props allow child components to receive data from their parent components 

Declarative Programming. 


### Benefits
1.  Efficiency and Performance 
2.  Modularity and Reusability 
3.  Interactivity and User Experience 
4.  Data management 
5.  Development speed. 


Overview 

CRUD : TODO List app 
- Component usage 
- Props usage 
- State usage 
- Parent to child communication / child to Parent communication 


5 MINUTES BREAK :


component APp  -> parent component 
load up child components 
TodoForm 
TodoList 

TodoForm or todolist can also have child component 


### DATA COMMUNICATION 
1. Parent to child communication
2. Child to parent communication 
   Facilitated by the idea of props. 