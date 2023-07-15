import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace ui5.typescript.helloworld
 */
export default class Component extends UIComponent {

    public multiply(x : number, y : number) : number {
        return x * y;
    }
}