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
public model1:string;
  public callBack(newVal1) {
        console.log('value is changed to ', newVal1);
        this.model1 = newVal1;
    }
  public myNames=['Radha','Shri'];

  public searchCriteriaList=[
  'year-1985,cause-Blowout',
  'year-1995,cause-Blowout',
  'year-1980,cause-Blowout',
  'year-1990,cause-Blowout',
  'year-2000,cause-Blowout',
  'year-1973,cause-Blowout'
  ]

  public serverIpList=[
    '10.2.402.127',
  '10.2.402.129',
  '10.2.402.126',
  '10.2.402.120',
  '10.2.402.121',
  '10.2.402.126'
  ]
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
