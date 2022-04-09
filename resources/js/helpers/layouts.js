import DefaultLayout from "../components/layouts/DefaultLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export const registerLayouts = function (app) {
    app.component('DefaultLayout', DefaultLayout);
    app.component('DarkLayout', DarkLayout);
}
