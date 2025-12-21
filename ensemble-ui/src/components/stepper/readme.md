# eui-stepper



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                         | Default        |
| ------------- | -------------- | ----------- | ---------------------------- | -------------- |
| `currentStep` | `current-step` |             | `number`                     | `0`            |
| `orientation` | `orientation`  |             | `"horizontal" \| "vertical"` | `"horizontal"` |
| `steps`       | `steps`        |             | `string[]`                   | `[]`           |
| `styleValue`  | `stylevalue`   |             | `string \| undefined`        | `undefined`    |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `stepSelect` |             | `CustomEvent<number>` |


## Dependencies

### Depends on

- [eui-icon](../icon)
- [eui-badge](../badge)

### Graph
```mermaid
graph TD;
  eui-stepper --> eui-icon
  eui-stepper --> eui-badge
  style eui-stepper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
