import { createBrowserRouter } from "react-router-dom" ;
import { HotelList } from "../pages/HotelList";

const routes=[
  {
    path: "/hotellist",
    Component: HotelList,
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