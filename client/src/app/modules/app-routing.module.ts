import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from '@app/lobby/lobby.component';
import { GamePageComponent } from '@app/pages/game-page/game-page.component';
import { LeaderboardPageComponent } from '@app/pages/leaderboard-page/leaderboard-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { SwitchDialogComponent } from './../components/switch-dialog/switch-dialog.component';
import { WaitingRoomComponent } from './../components/waiting-room/waiting-room.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'game', component: GamePageComponent },
    { path: 'material', component: MaterialPageComponent },
    { path: 'waiting', component: WaitingRoomComponent },
    { path: 'leaderboard', component: LeaderboardPageComponent },
    { path: 'lobby', component: LobbyComponent },
    { path: 'switch', component: SwitchDialogComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
