# eui-chips



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type                  | Default     |
| -------------- | -------------- | ----------- | --------------------- | ----------- |
| `data`         | `data`         |             | `any[]`               | `[]`        |
| `displayField` | `displayfield` |             | `string \| undefined` | `undefined` |
| `placeholder`  | `placeholder`  |             | `string`              | `''`        |
| `styleValue`   | `stylevalue`   |             | `string \| undefined` | `undefined` |
| `suggestions`  | `suggestions`  |             | `any[]`               | `[]`        |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `itemSelected` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [eui-icon](../icon)
- [eui-input](../input)

### Graph
```mermaid
graph TD;
  eui-chips --> eui-icon
  eui-chips --> eui-input
  eui-input --> eui-icon
  style eui-chips fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
