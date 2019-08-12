import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import { UserList } from "./tables/Users";
import { PostList, PostEdit, PostCreate } from "./tables/Posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;
