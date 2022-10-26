import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to lwc! Lakshmi  Reddy";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      }
    ];
  }
}
