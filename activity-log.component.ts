import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  constructor() { }
  count:number=25;
  searchUserName:string="";
  ngOnInit() {
  }

  onExport(){

  }
  public activityLogs = [
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135'},


  ]
}
