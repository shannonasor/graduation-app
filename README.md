## graduation app



### Concepts
#### Forms
- controlled components: input elements are stored and updated into React components state(component state acts as a single source of truth), your form elements are always in sync, the state gives the value to the form field as a prop, the field ask the component state for the current value, , this will allow the state to be shared with other components easily
- uncontrolled components: input elements are stored in the DOM(similar to HTML) and form data is queried using ref


**Set Up State with Form:** 
- the form will not keep track of input if there is no state
- use `useState` for each form field to set up state setting each to a empty string `const [keep, setKeep] = useState('')`
- add `value` attribute for each field and set it equal to the state that was set using use state
- add a `onChange` event so you can change the state, and set it equal to a anonymous fuction that invokes the state
    - `onChange={(e) => setBePrepared(e.target.value)}` OnChange gives us access to an event object(e), use the event object to get access to what is being typed in the field `e.target.value`, the traget is the form field, the value is the value attribute contents
    - so when the field is typed into the onChange event is triggered and the state is updated(kind of two way binding)
    - to see what is being typed on the screen `<p>{bePrepared}</p>`
**Submit Events**
- **First Option:** when a button is pressed inside a form it fires a submit event on the form itself, and we can listen for this and react to it
    1. Create a handleSbmit funtion:
        - Prevent Default action: when the button is clicked the page will refresh to prevent this default action, add a `e.preventDefault();`
        - Create a form object and set it equl to the state you want to save (use console log to see results, when button is pushed)

                                const handleSubmit = (e) => {
                                e.preventDefault();
                                const advice = {bePrepared, keep, openTo, always, dont, dontBeAfraid, lastAdvice};
                                console.log(advice);
                                }

    2. add a `onSubmit` event to the form tag, and set it equal to the `handleSubmit` function
        - `<form className='advice-for-graduate' onSubmit={handleSubmit}>`
                        
- **Second Option:** you can attach a click event to the button itself and react to it

**Making a POST Request**
- Create a data folder and create a `.json` file inside of it with some data that match the object you will be submitting
- Since we will be making a request once in the entire application, We can make the post request inside the `handleSubmit` function
- Create a fetch request using the fetch API



- React Router
### ToDo
- fix header with name and logo on landing page