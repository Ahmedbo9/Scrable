import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { PLAYER } from '@app/classes/player';
import { GameService } from '@app/services/game.service';
import { RandomModeService } from '@app/services/random-mode.service';
import { UserSettingsService } from '@app/services/user-settings.service';
@Component({
    selector: 'app-game-mode-dialog',
    templateUrl: './game-mode-dialog.component.html',
    styleUrls: ['./game-mode-dialog.component.scss'],
})
export class GameModeDialogComponent {
    error: boolean;
    errorMessage: string = '';
    isChecked: boolean = false;
    message: string = '';

    constructor(
        public userSettingsService: UserSettingsService,
        public gameService: GameService,
        private randomMode: RandomModeService,
        public matDialog: MatDialog,
    ) {}

    validateName() {
        const result = this.userSettingsService.validateName(this.userSettingsService.nameOption.userChoice);
        this.error = result.error;
        this.errorMessage = result.errorMessage;
    }

    configureGame() {
        this.gameService.players[PLAYER.realPlayer].name = this.userSettingsService.nameOption.userChoice;
        this.gameService.numPlayers = this.userSettingsService.settings.numPlayers.currentChoiceKey;
    }

    applyRandomMode(event: MatCheckboxChange) {
        this.randomMode.isChecked = event.checked;
        this.message = 'MODE BONUS ALEATOIRE ACTIVÉ ';
        if (!event.checked) {
            this.message = 'MODE BONUS ALEATOIRE DESACTIVÉ';
        }
    }

    numPlayerChoice() {
        const numPlayers = this.userSettingsService.settings.numPlayers.currentChoiceKey;
        if (numPlayers === 'multiplayer') {
            return true;
        } else {
            return false;
        }
    }
}
