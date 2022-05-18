## graduation app



### Concepts
- Forms
    - controlled components: input elements are stored and updated into React components state(component state acts as a single source of truth), your form elements are always in sync, the state gives the value to the form field as a prop, the field ask the component state for the current value, , this will allow the state to be shared with other components easily
    - uncontrolled components: input elements are stored in the DOM(similar to HTML) and form data is queried using ref
            1. Set Up State: the form will not keep track of input if there is no state
                    - use `useState` for each form field to set up state setting each to a empty string
                    - add `value` attribute for each field and set it equal to the state that was set using use state
                    - add a `onChange` event so you can change the state, and set it equal to a anonymous fuction that invokes the state
                        - `onChange={(e) => setBePrepared(e.target.value)}` OnChange gives us access to an event object(e), use the event object to get access to what is being typed in the field `e.target.value`, the traget is the form field, the value is the value attribute contents
                        - so when the field is typed into the onChange event is triggered and the state is updated(kind of two way binding)
                        - to see what is being typed on the screen `<p>{bePrepared}</p>`
- React Router
### ToDo
- fix header with name and logo on landing page