import { Component, OnInit } from '@angular/core';
import { ActivityLogSearch } from './activity-log-search'
import * as moment from 'moment/moment';

@Component({
  selector: 'activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  public model1: string;

  count: number = 25;
  searchUserName: string = "";
  fromDate: string;
  toDate: string;
  isfromDateInvalid: boolean;
  istoDateInvalid: boolean;
  activityLogSearch: ActivityLogSearch;

  constructor() { }

  ngOnInit() {

  }

  onExport() {

  }

  public callBack(newVal1) {
    this.model1 = newVal1;
  }

  setfromDate(fromDate: string) {
    this.fromDate = fromDate;
  }

  settoDate(toDate: string) {
    this.toDate = toDate;
  }
  checkfromDateFormat(value: boolean) {
    if (value)
      this.isfromDateInvalid = false;
    else
      this.isfromDateInvalid = true;
  }

  checktoDateFormat(value: boolean) {
    if (value)
      this.istoDateInvalid = false;
    else
      this.istoDateInvalid = true;
  }

  checkDateValidation() {

    if (this.fromDate && this.toDate && !this.isfromDateInvalid && !this.istoDateInvalid) {
      return !(moment(this.fromDate).isBefore(this.toDate));
    } else {
      return false;
    }
  }

  public userNames = ['BOG,Amruta', 'CG,Abhishek','WTW,Hemant' ,'BOG,Shweta','CG,Souvik'];

  public searchCriteriaList = [
    'year-1985,cause-Blowout',
    'year-1995,cause-Blowout',
    'year-1980,cause-Blowout',
    'year-1990,cause-Blowout',
    'year-2000,cause-Blowout',
    'year-1973,cause-Blowout'
  ]

  public serverIpList = [
    '10.2.402.127',
    '10.2.402.129',
    '10.2.402.126',
    '10.2.402.120',
    '10.2.402.121',
    '10.2.402.126'
  ]
  public activityLogs = [
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },
    { date: '21-04-2018 10:00', username: 'BOG, Shah, Sushil', viewmodule: 'Visual Analytics', action: 'Download', details: 'Yearwise view of Incidents', searchCriteria: 'Year - 1985, Cause - Blowout', serverIp: '10.2.402.135' },


  ]
}
