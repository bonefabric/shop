import DefaultLayout from "../components/layouts/DefaultLayout";
import AdminLayout from "../components/layouts/AdminLayout";

export const registerLayouts = function (app) {
    app.component('DefaultLayout', DefaultLayout);
    app.component('AdminLayout', AdminLayout);
}
