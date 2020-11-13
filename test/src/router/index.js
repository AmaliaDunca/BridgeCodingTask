import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import ItemX from "@/components/ItemX";
import ItemY from "@/components/ItemY";
import ItemZ from "@/components/ItemZ";
import Results from "@/components/Results";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/itemX",
      name: "ItemX",
      component: ItemX
    },
    {
      path: "/itemY",
      name: "ItemY",
      component: ItemY
    },
    {
      path: "/itemZ",
      name: "ItemZ",
      component: ItemZ
    },
    {
      path: "/results",
      name: "Results",
      component: Results
    }
  ]
});
