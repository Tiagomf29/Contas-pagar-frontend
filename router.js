const { Router } = require("express");

Vue.use(Router)

export default new Router({

    mode: "history",
    routes: [{
        path: "/Principal",
        name: 'Principal'
    }]

})