React Accordion
----

A simple accordion component built with React.

Avaliable props:
```
panels = arrayOf{
    title          = 'Title',
    message        = 'Message',
    panelClassName = 'ClassName'
}
toggleSpeed  = {400},
toggleHeight = {40},
className    = 'accordion__className'
```

Require the component using `var Accordion = require('react-accordion')` with the option to include styles by pathing directly to `/scss/accordion` - Optional flag to disable default stylings `$include-accordion-component-classes`.

Development - `npm run demo`
Distribution - `npm run build`
