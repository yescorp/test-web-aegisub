import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';
import { AegisubComponent } from './aegisub/aegisub.component';
import { TitleComponent } from './aegisub/title/title.component';
import { MenuComponent } from './aegisub/menu/menu.component';
import { ButtonsMenuComponent } from './aegisub/buttons-menu/buttons-menu.component';
import { EditorComponent } from './aegisub/editor/editor.component';
import { VideoComponent } from './aegisub/editor/video/video.component';
import { AudioComponent } from './aegisub/editor/audio/audio.component';
import { TextComponent } from './aegisub/editor/text/text.component';
import { VideoLeftButtonsMenuComponent } from './aegisub/editor/video/video-left-buttons-menu/video-left-buttons-menu.component';
import { VideoBottomControlsComponent } from './aegisub/editor/video/video-bottom-controls/video-bottom-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AegisubComponent,
    TitleComponent,
    MenuComponent,
    ButtonsMenuComponent,
    EditorComponent,
    VideoComponent,
    AudioComponent,
    TextComponent,
    VideoLeftButtonsMenuComponent,
    VideoBottomControlsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'aegisub', component: AegisubComponent}
    ]),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
