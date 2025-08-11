import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing-module';
import { PostsService } from './services/posts.services';
import { PostsResolver } from './resolvers/Posts.resolvers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
