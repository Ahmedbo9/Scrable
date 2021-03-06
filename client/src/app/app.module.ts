import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayAreaComponent } from '@app/components/play-area/play-area.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AppComponent } from '@app/pages/app/app.component';
import { GamePageComponent } from '@app/pages/game-page/game-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { GameModeDialogComponent } from './components/game-mode-dialog/game-mode-dialog.component';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';
import { QuitConfirmationDialogComponent } from './components/quit-confirmation-dialog/quit-confirmation-dialog.component';
import { SwitchDialogComponent } from './components/switch-dialog/switch-dialog.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { QuitMultiplayerDialogComponent } from './components/quit-multiplayer-dialog/quit-multiplayer-dialog.component';
import { WaitingRoomComponent } from './components/waiting-room/waiting-room.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [
        AppComponent,
        GamePageComponent,
        MainPageComponent,
        MaterialPageComponent,
        PlayAreaComponent,
        SidebarComponent,
        GameModeDialogComponent,
        LeaderboardPageComponent,
        ChatboxComponent,
        GameOverviewComponent,
        LobbyComponent,
        SwitchDialogComponent,
        QuitConfirmationDialogComponent,
        QuitMultiplayerDialogComponent,
        WaitingRoomComponent,
    ],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
