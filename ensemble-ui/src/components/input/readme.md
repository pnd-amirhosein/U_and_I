# eui-input



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type                                                                                                                                                                                                                 | Default                                            |
| ------------ | ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `alert`      | `alert`      |             | `{ message: string; type: "danger" \| "success"; }`                                                                                                                                                                  | `{ message: "There's an error!", type: "danger" }` |
| `iconStyle`  | `icon-style` |             | `IconStyleEnum.micro \| IconStyleEnum.mini \| IconStyleEnum.outline \| IconStyleEnum.solid`                                                                                                                          | `IconStyleEnum.outline`                            |
| `mode`       | `mode`       |             | `"normal" \| "outline" \| "text-input"`                                                                                                                                                                              | `'normal'`                                         |
| `type`       | `type`       |             | `string`                                                                                                                                                                                                             | `'text'`                                           |
| `validation` | `validation` |             | `undefined \| ({ required?: boolean \| undefined; minLength?: number \| undefined; maxLength?: number \| undefined; pattern?: RegExp \| undefined; custom?: ((value: string) => string \| boolean) \| undefined; })` | `undefined`                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
