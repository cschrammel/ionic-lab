import { Component } from "@angular/core";
import { SchedulePage } from "../schedule/schedule";
import { AgendaPage } from "../agenda/agenda";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="schedule"
        tabTitle="Conf. Schedule"
        tabIcon="calendar">
      </ion-tab>
      <ion-tab [root]="agenda"
        tabTitle="Agenda"
        tabIcon="list">
      </ion-tab>
    </ion-tabs>
  `
})
export class TabBar {
  schedule = SchedulePage;
  agenda = AgendaPage;
}
