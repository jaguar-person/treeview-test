## TreeView test

Build a JSON Viewer that renders any given valid JSON structure as a tree similar to the provided designs.

### Objective

- Any `object` or `array` should be collapsible. ( i.e, Any property that can have nested properties should be collapsible )
  - The “root” object should be expanded by default.
  - All child properties should be collapsed by default.
- When the “create column” button is clicked, it should simply copy the “json path” of the property into the clipboard.

### Bonus Objectives

- Animations and transitions would be a bonus.
- The nested property should remember its “expanded” or “collapsed” state even if the parent toggles between expanded or collapsed.

### Tech Stack

React, Next 14, TypeScript, React context, Mantine, TailiwndCSS

### Setup

```
npm i
npm run dev
```

### Sample
