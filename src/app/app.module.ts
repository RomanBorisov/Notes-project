import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { TextNodesComponent } from './text-nodes/text-nodes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { EditingNodesComponent } from './editing-nodes/editing-nodes.component';
import { EditingСategoryComponent } from './editing-category/editing-category.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'textNode/:id', component: TextNodesComponent},
  {path: 'editnodes', component: EditingNodesComponent},
  {path: 'editcategory', component: EditingСategoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TextNodesComponent,
    CreateNoteComponent,
    NoteCardComponent,
	EditingNodesComponent,
	EditingСategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],

})
export class AppModule {


}
