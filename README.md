# ejemplo14

## Project setup
```
Set of screens the user should go through
src/events/BusinessEventList.js -> list of business events (events understood by the customer)
src/components/RoutingManager -> deal with the routing application, routing is driven by events to display the right form
src/views/Screen* -> screens who emit events handled by RoutingManager

note : A screen's code is not aware of routing details : it doesn't know what is the next screen the application will show
