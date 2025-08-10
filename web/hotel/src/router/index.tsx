import { createBrowserRouter } from "react-router-dom" ;
import { hotelList } from "../pages/hotelList";

const routes=[
  {
    path: "/hotellist",
    Component: hotelList,
    /* children: [
      { path: "new", Component: NewPost },
      { path: ":slug", Component: BlogPost },
    ], */
  }

  /* {
    id: "blog",
    path: "/blog",
    Component: BlogLayout,
    children: [
      { path: "new", Component: NewPost },
      { path: ":slug", Component: BlogPost },
    ],
  }, */
];

let router = createBrowserRouter(routes, {
      basename: "/hotel",
  
  }
);