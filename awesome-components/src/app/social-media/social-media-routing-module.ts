import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { PostsResolver } from './resolvers/Posts.resolvers';

const routes: Routes = [
  {path: '', component: PostList, resolve: { posts: PostsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
