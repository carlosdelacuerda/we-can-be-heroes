import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../interfaces/heroes.interfaces';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public heroService: HeroesService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }

  onClick(): void {
    this.dialogRef.close();
  }

  deleteHero(id) {
    this.heroService.deleteAHeroById(id).subscribe()
    this.dialogRef.close();
  }

}
